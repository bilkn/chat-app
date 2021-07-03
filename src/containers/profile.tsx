import React from "react";
import { Profile } from "../components";
import girl from "../assets/girl.jpg";
import { PhotoCamera } from "@styled-icons/material/PhotoCamera";
import "styled-components/macro";
import { colors } from "../styles/variables";

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

      <Profile.FieldWrapper
   
      >
        <Profile.Fieldset>
          <Profile.Label>Username</Profile.Label>
          <Profile.Input value="Enes Bilkan" />
        </Profile.Fieldset>
      </Profile.FieldWrapper>
      <Profile.FieldWrapper
  
      >
        <Profile.Fieldset>
          <Profile.Label>Status</Profile.Label>
          <Profile.Input value="Available" />
        </Profile.Fieldset>
      </Profile.FieldWrapper>
    </Profile>
  );
}

export default ProfileContainer;
