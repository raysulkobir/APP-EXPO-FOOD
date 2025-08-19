import { COLORS } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { searchStyles } from "../../assets/styles/search.styles";

const search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);
  return (
    <View style={searchStyles.container}>
      <View style={searchStyles.searchSection}>
        <View style={searchStyles.searchContainer}>
            <Ionicons
              name="search"
              size={20}
              color={COLORS.textLight}
              style={searchStyles.searchIcon}
            />

            <TextInput
              style={searchStyles.searchInput}
              placeholder="Search recipes, ingredients..."
              placeholderTextColor={COLORS.textLight}
              value={searchQuery}
              onChangeText={setSearchQuery}
              returnKeyType='search'
            />

          <TouchableOpacity onPress={() => setSearchQuery("")} style={searchStyles.clearButton}>
            <Ionicons name="close-circle" size={20} color={COLORS.textLight} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default search