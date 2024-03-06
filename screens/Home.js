import { useState } from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import { View, Image, SafeAreaView, TextInput, TouchableOpacity, Text } from "react-native";
import { theme } from "../theme";

const Home = () => {

    const [showSearch, setShowSearch] = useState(false);
    const [locations, setLocations] = useState([1, 2]);

    const handleLocation = (location) => {
        alert(location);
    };

    return (
        <View className="flex-1 relative">
            <Image
                blurRadius={10}
                source={require("../assets/images/background.png")}
                className="flex-1 absolute h-full w-full"
                resizeMode="cover"
            />
            <SafeAreaView className="flex flex-1 mt-10">
                {/* Search Section */}
                <View style={{ height: "7%" }} className="mx-4 relative z-50">
                    <View
                        className="flex-row justify-end items-center rounded-full"
                        style={{ backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent" }}
                    >
                        {showSearch &&
                            <TextInput
                                placeholder="Search City..."
                                placeholderTextColor={"gray"}
                                className="pl-6 h-10 flex-1 text-base text-dark"
                            />
                        }
                        <TouchableOpacity
                            onPress={() => setShowSearch(!showSearch)}
                            style={{ backgroundColor: theme.bgWhite(0.3) }}
                            className="rounded-full p-3 m-1"
                        >
                            <MagnifyingGlassIcon size="25" color="white" />
                        </TouchableOpacity>
                    </View>
                    {
                        locations.length && showSearch && (
                            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                                {locations.map((location, index) => {
                                    let showBorder = index + 1 !== locations.length;
                                    let borderClass = showBorder ? "border-b border-b-gray-400" : "";
                                    return (
                                        <TouchableOpacity
                                            onPress={() => handleLocation(location)}
                                            key={index}
                                            className={`flex-row items-center border-0 p-3 px-4 mb-1 ${borderClass}`}
                                        >
                                            <MapPinIcon size="28" color="gray" />
                                            <Text className="text-black text-lg ml-2">London</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        )
                    }
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Home;
