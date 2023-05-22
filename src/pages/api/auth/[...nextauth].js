import NextAuth from "next-auth";
import providers from "next-auth";

export default NextAuth({
  providers: [
    providers.GitHub({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
});
