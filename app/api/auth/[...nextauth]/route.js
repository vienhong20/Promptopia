import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


const handler = NextAuth({
    Providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {
        try {

        } catch (err) {

        }
    }
})

export { handler as GET, handler as POST };