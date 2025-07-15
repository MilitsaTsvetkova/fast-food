import { images } from "@/constants";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
// import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  const params = useLocalSearchParams<{ query?: string }>();
  const [query, setQuery] = useState(params.query || "");

  //   const debouncedSearch = useDebouncedCallback((text: string) => {
  //     router.push(`/(tabs)/search?query=${text}`);
  //   }, 500);

  const handleSearch = (text: string) => {
    setQuery(text);
    if (!text) router.setParams({ query: undefined });
  };

  const handleSubmit = () => {
    if (query.trim()) {
      router.setParams({ query });
    }
  };

  return (
    <View className="searchbar">
      <TextInput
        className="flex-1 p-5"
        placeholder="Search for pizzas, burgers"
        value={query}
        onChangeText={handleSearch}
        placeholderTextColor="#A0A0A0"
        returnKeyType="search"
        onSubmitEditing={handleSubmit}
      />
      <TouchableOpacity
        className="pr-6"
        onPress={() => {
          router.setParams({ query });
        }}
      >
        <Image
          source={images.search}
          resizeMode="contain"
          className="size-6"
          tintColor="5D5F6D"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
