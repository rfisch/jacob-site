//this slug landing will use the slug to look up into Strapi API to get posts data 
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

const  Blog = () => {
  const router = useRouter()
  const { pid } = router.query

  return <div>
    <PhoneIcon />
  </div>

}

export default Blog
