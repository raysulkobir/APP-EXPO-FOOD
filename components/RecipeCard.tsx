import { COLORS } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { recipeCardStyles } from "../assets/styles/home.styles";

const RecipeCard = ({ recipe }) => {
  return (
    <TouchableOpacity
          style={recipeCardStyles.container}
          onPress={() => router.push(`/recipe/${recipe.id}`)}
    >
        <View style={recipeCardStyles.imageContainer}>
            <Image 
                source={{ uri: recipe.image }}
                style={recipeCardStyles.image}
                contentFit="cover"
                transition={300}
            />
        </View>

        <View style={recipeCardStyles.content}>
            <Text style={recipeCardStyles.title}>
                { recipe.title }
            </Text>

            <Text style={recipeCardStyles.description} numberOfLines={2}>
                { recipe.description }
            </Text>

            <View style={recipeCardStyles.footer}>
                <View style={recipeCardStyles.timeContainer}>
                    <Ionicons name="time-outline" size={15} color={COLORS.textLight} />
                    <Text style={recipeCardStyles.timeText}>{ recipe.cookTime }</Text>
                </View>

                <View style={recipeCardStyles.timeContainer}>
                      <Ionicons name="people-outline" size={15} color={COLORS.textLight} />
                    <Text style={recipeCardStyles.timeText}>{ recipe.servings }</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RecipeCard