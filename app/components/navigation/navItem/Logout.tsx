import { useMutation } from "@apollo/client";
import { MaterialIcons } from "@expo/vector-icons";
import { DrawerItem } from "@react-navigation/drawer";
import { LOGOUT_USER } from "components/navigation/navItem/gql/mutations/logoutUser";
import { userLoggedInVar } from "components/forms/LoginForm/LoginForm";

export const LogoutDrawerItem = ({}) => {
  const [logoutUser, { client }] = useMutation(LOGOUT_USER);

  return (
    <DrawerItem
      label="Logout"
      onPress={async () => {
        await logoutUser();
        userLoggedInVar(null);
      }}
      icon={() => <MaterialIcons name="logout" size={24} color="black" />}
    />
  );
};
