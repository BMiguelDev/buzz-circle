import { Link } from 'react-router-dom'

interface PropTypes {
    className?: string;
    path: string;
}

const RedirectButton = ({ className, path }: PropTypes) => {
  return (
    <Link className={className} to={path}>Add Post</Link>
  )
}

export default RedirectButton
