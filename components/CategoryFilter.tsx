import { Image } from 'expo-image';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { homeStyles } from "../assets/styles/home.styles";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {

  
    return (
        <View style={homeStyles.categoryFilterContainer}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={homeStyles.categoryFilterScrollContent}
            >
                {categories.map((category) => {
                    const isSelected = selectedCategory === category.name;
                    return (
                        <TouchableOpacity 
                            style={homeStyles.categoryButton}
                            key={category.id}
                        >
                            <Image
                                source={{ uri: category.image }}
                                style={[homeStyles.categoryImage, isSelected && homeStyles.selectedCategoryImage]}
                                contentFit="cover"
                                transition={300}
                            />
                            <Text style={[homeStyles.categoryText, isSelected && homeStyles.selectedCategoryText]}>{category.name}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    )
}

export default CategoryFilter