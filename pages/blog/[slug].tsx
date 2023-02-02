//this slug landing will use the slug to look up into Strapi API to get posts data 

import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Hello World {pid}</p>
}

export default Post
