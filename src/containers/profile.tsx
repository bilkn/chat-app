import React from "react";
import { Profile } from "../components";
import girl from "../assets/girl.jpg";
import { PhotoCamera } from "@styled-icons/material/PhotoCamera";

function ProfileContainer() {
  return (
    <Profile>
      <Profile.Wrapper>
        <Profile.AvatarWrapper>
          <Profile.Button>
            <Profile.IconContainer>
              <PhotoCamera size="24" />
              <Profile.IconText>CHANGE YOUR PROFILE PICTURE</Profile.IconText>
            </Profile.IconContainer>
            <Profile.Avatar src={girl} />
          </Profile.Button>
        </Profile.AvatarWrapper>
      </Profile.Wrapper>
    </Profile>
  );
}

export default ProfileContainer;
