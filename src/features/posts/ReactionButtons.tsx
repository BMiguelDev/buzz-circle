import { PostType, ReactionsType } from "../../models/model";
import { useAddReactionMutation } from "./postsSlice";

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
    const [addReaction] = useAddReactionMutation();

    const handleAddReaction = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, reaction: string) => {
        event.stopPropagation();
        if (!post.reactions) return;
        const newReactions = {
            ...post.reactions,
            [reaction]: post.reactions[reaction as keyof ReactionsType] + 1,
        };
        addReaction({ postId: post.id, reactions: newReactions });
    };

    const parseReactionNumber = (number: number) => {
        var s = ["", "k", "M", "B"]; // Array with number suffixes
        if (number > 10000000000) return ">10B";

        let counter = 0;
        while (number > 999) {
            const value = number / 1000;
            if (value < 10) number = Math.trunc(value * 10) / 10; // Prevent rounding number up
            else number = Math.floor(value);
            counter++;
        }
        return number + s[counter];
    };

    const emojiButtons = Object.entries(reactionEmojis).map(([key, value]) => {
        if (!post.reactions) return null;
        else {
            const reactionNumber = post.reactions[key as keyof ReactionsType];
            return Object.keys(post.reactions)?.includes(key) ? (
                <button key={key} onClick={(e) => handleAddReaction(e, key)} className="reaction_button">
                    <span>{value}</span>
                    <p>{parseReactionNumber(reactionNumber)}</p>
                </button>
            ) : null;
        }
    });

    return <div className={className}>{emojiButtons}</div>;
};

export default ReactionButtons;
