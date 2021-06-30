import React from "react";
import { Profile } from "../components";
import girl from "../assets/girl.jpg";
import { PhotoCamera } from "@styled-icons/material/PhotoCamera";
import "styled-components/macro";

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

      <Profile.Wrapper css="background:white;">
        <Profile.Fieldset>
          <Profile.Label>Username</Profile.Label>
          <Profile.Input value="Enes Bilkan" />
        </Profile.Fieldset>
      </Profile.Wrapper>
    </Profile>
  );
}

export default ProfileContainer;
