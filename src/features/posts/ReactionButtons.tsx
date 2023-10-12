import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { PostType, ReactionsType } from "../../models/model";
import { useUpdateReactionMutation } from "./postsSlice";
import { selectCurrentAccessToken, selectCurrentUser } from "../auth/authSlice";
import useGetUserId from "../../hooks/useGetUserId";

const reactionEmojis = {
    thumbsup: "👍",
    eyes: "👀",
    heart: "❤️",
    celebration: "🎉",
    mindblown: "🤯",
};

interface PropTypes {
    post: PostType;
    className?: string;
}

const ReactionButtons = ({ post, className }: PropTypes) => {
    const [updateReaction] = useUpdateReactionMutation();
    const token = useSelector(selectCurrentAccessToken);
    const user = useSelector(selectCurrentUser);
    const [userId, isLoadingUserId] = useGetUserId(user);
    const navigate = useNavigate();

    const handleUpdateReaction = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, reaction: string) => {
        event.stopPropagation();

        // If user isn't logged in upon clicking a reaction, navigate to login screen
        if(!token) return navigate('/buzz-circle/login', { state: { isRedirected: true }});
        
        if (!post.reactions || isLoadingUserId) return;

        let newReactions: ReactionsType;
        const reactionUserIdList = post.reactions[reaction as keyof ReactionsType];
        if(reactionUserIdList.includes(userId)) {   // If list of userIds of this reaction already includes the currently authenticated user's id, remove this user's id from the reaction
            newReactions = {
                ...post.reactions,
                [reaction]: post.reactions[reaction as keyof ReactionsType].filter(reactionUserId => reactionUserId !== userId)
            };
        } else {    // If list of userIds of this reaction doesn't include the currently authenticated user's id, add this user's id to the reaction
            newReactions = {
                ...post.reactions,
                [reaction]: [...post.reactions[reaction as keyof ReactionsType], userId],
            };
        }

        try {
            await updateReaction({ postId: post.id, reactions: newReactions }).unwrap();
        } catch (err: any) {
            if (!err?.originalStatus) {
                console.error("No Server Response");
            } else if (err.originalStatus === 403) {    // If user's access token expired (a 403 'status' will be returned), redirect user to the login page
                console.error("Forbidden");
                navigate('/buzz-circle/login', { state: { isRedirected: true }});
            } else {
                console.error("Update Reaction Failed");
            }
        }
    };

    const parseReactionNumber = (number: number) => {
        var s = ["", "k", "M", "B"];    // Array with number suffixes
        if (number > 10000000000) return ">10B";

        let counter = 0;
        while (number > 999) {
            const value = number / 1000;
            if (value < 10) number = Math.trunc(value * 10) / 10;   // Prevent rounding number up
            else number = Math.floor(value);
            counter++;
        }
        return number + s[counter];
    };

    const emojiButtons = Object.entries(reactionEmojis).map(([key, value]) => {
        if (!post.reactions) return null;
        else {
            const reactionUserIdList = post.reactions[key as keyof ReactionsType];
            const reactionNumber = reactionUserIdList.length;
            return Object.keys(post.reactions)?.includes(key) ? (
                <button key={key} onClick={(e) => handleUpdateReaction(e, key)} className={reactionUserIdList.includes(userId) ? "reaction_button reaction_button_clicked" : "reaction_button"}>
                    <span>{value}</span>
                    <p>{parseReactionNumber(reactionNumber)}</p>
                </button>
            ) : null;
        }
    });

    return <div className={className}>{emojiButtons}</div>;
};

export default ReactionButtons;
