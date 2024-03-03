import { Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View className="bg-red-500">
            <Text>
                Home
            </Text>
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Mubashir' })
                }
            />
        </View>
    );
};

export default Home;
