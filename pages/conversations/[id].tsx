import Sidebar from "@/components/Sidebar";
import { auth, db } from "../../config/firebase";
import { Conversation } from "@/types";
import { getRecipientEmail } from "@/utils/getRecipientEmail";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";

interface Props {
  conversation: Conversation;
}

const StyledContainer = styled.div`
  display: flex;
`;
const Conversation = ({ conversation }: Props) => {
  const [loggedInUser, _loading, _error] = useAuthState(auth);
  return (
    <StyledContainer>
      <Head>
        {conversation && (
          <title>
            Conversation with{" "}
            {conversation.users
              ? getRecipientEmail(conversation.users, loggedInUser)
              : ""}
          </title>
        )}
      </Head>

      <Sidebar />

      <h1>MESSAGES</h1>
    </StyledContainer>
  );
};

export default Conversation;

export const getSeverSideProps: GetServerSideProps<
  Props,
  { id: string }
> = async (context) => {
  const conversationId = context.params?.id;

  // get conversation to know who we are chatting with
  const conversationRef = doc(db, "conversations", conversationId as string);
  const conversationSnapshot = await getDoc(conversationRef);

  return {
    props: {
      conversation: conversationSnapshot.data() as Conversation,
    },
  };
};
