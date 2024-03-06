import { View, Text, Button } from "react-native";

const Profile = ({ navigation }) => {
    return (
        <View className="">
            <Text>Profile</Text>
            <Button
                title="Go back to Home"
                onPress={() =>
                    navigation.goBack()
                }
            />
        </View>
    );
};

export default Profile;
