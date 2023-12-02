import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Text,
  Hr,
  Container,
  Preview,
  Section,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";
import Contact from "@/components/contact";

type ContactFromProps = {
  message: string;
  senderEmail: string;
};

export default function ContextFromEmail({
  message,
  senderEmail,
}: ContactFromProps) {
  return (
    <Html>
      <Head>
        <Preview>New Message from your portfolio site</Preview>
        <Tailwind>
          <Body className="bg-gray-100 text-black">
            <Container>
              <Section className="bg-white border border-black/10 my-10 px-10 py-4 rounded-md">
                <Heading className="leading-tight">
                  You received the following message from the contact from
                </Heading>
                <Text>{message}</Text>
                <Hr></Hr>
                <Text>The sender's {senderEmail}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Head>
    </Html>
  );
}
