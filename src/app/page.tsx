import { UserButton, auth } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs/server";

const getOAuth = async () => {
  const { userId } = auth()
  const test = await clerkClient.users.getUserOauthAccessToken(userId!, 'oauth_google')
  console.log('test', test)
  return test
}




export default async function Home() {

  getOAuth()

  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
