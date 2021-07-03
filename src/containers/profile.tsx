import React from "react";
import { Profile } from "../components";
import girl from "../assets/girl.jpg";
import { PhotoCamera } from "@styled-icons/material/PhotoCamera";
import { Pencil } from "@styled-icons/boxicons-solid/Pencil";
import "styled-components/macro";
function ProfileContainer() {
  return (
    <Profile>
      <Profile.Wrapper>
        <Profile.AvatarWrapper>
          <Profile.AvatarButton>
            <Profile.IconContainer>
              <PhotoCamera size="24" />
              <Profile.IconText>CHANGE YOUR PROFILE PICTURE</Profile.IconText>
            </Profile.IconContainer>
            <Profile.Avatar src={girl} />
          </Profile.AvatarButton>
        </Profile.AvatarWrapper>
      </Profile.Wrapper>

      <Profile.FieldWrapper>
        <Profile.Fieldset>
          <Profile.Label>Username</Profile.Label>
          <Profile.InputWrapper>
            <Profile.Input value="Enes Bilkan" />
            <Profile.Button>
              <Pencil size="22" />
            </Profile.Button>
          </Profile.InputWrapper>
        </Profile.Fieldset>
      </Profile.FieldWrapper>
      <Profile.FieldWrapper>
        <Profile.Fieldset>
          <Profile.Label>Status</Profile.Label>
          <Profile.InputWrapper>
            <Profile.Input value="Available" />
            <Profile.Button>
              <Pencil size="22" />
            </Profile.Button>
          </Profile.InputWrapper>
        </Profile.Fieldset>
      </Profile.FieldWrapper>
    </Profile>
  );
}

export default ProfileContainer;
