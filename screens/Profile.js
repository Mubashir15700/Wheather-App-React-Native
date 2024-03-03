import { Text, View, Button } from 'react-native';

const Profile = ({ navigation }) => {
    return (
        <View className="bg-blue-500">
            <Text>Profile</Text>
            <Button
                title="Go back to Home"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
        </View>
    );
};

export default Profile;
