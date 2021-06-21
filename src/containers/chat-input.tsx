import {Chat} from "../components";
import { Attachment } from "@styled-icons/material-twotone/Attachment";
import { PaperPlane } from "@styled-icons/ionicons-sharp/PaperPlane";
import { EmojiEmotions } from "@styled-icons/material-outlined/EmojiEmotions";

function ChatInput() {
    return (
        <Chat.InputWrapper>
        <Chat.InnerWrapper>
          <Chat.Box>
            <Chat.Button css="left: 0;">
              <Attachment
                size="24"
                color="#979c9e"
                style={{ transform: "rotate(-90deg)" }}
              />
            </Chat.Button>
          </Chat.Box>

          <Chat.TextInput />
          <Chat.Box>
            <Chat.Button>
              <EmojiEmotions size="24" />
            </Chat.Button>
            <Chat.Button>
              <PaperPlane size="24" />
            </Chat.Button>
          </Chat.Box>
        </Chat.InnerWrapper>
      </Chat.InputWrapper>
    )
}

export default ChatInput
