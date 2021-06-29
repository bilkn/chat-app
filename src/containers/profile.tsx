import React from "react";
import { Profile } from "../components";
import girl from "../assets/girl.jpg";
function ProfileContainer() {
  return (
    <Profile>
      <Profile.Wrapper>
        <Profile.AvatarWrapper>
          <Profile.Button>
            <Profile.Avatar src={girl} />
          </Profile.Button>
        </Profile.AvatarWrapper>
      </Profile.Wrapper>
    </Profile>
  );
}

export default ProfileContainer;
