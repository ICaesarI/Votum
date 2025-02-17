import React, { useState } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import categoryButtonStyles from '../styles/categoryButtonStyles';

interface Props{
    name:string,
    id:number,
    addCategory: (id:number) => void,
}

export default function CategoryButton({name, id, addCategory}:Props){
    const [flag, setFlag] = useState(false);

    const handleOnPress = () => {
        setFlag(!flag);
        addCategory(id);
    }

    return(
        <View style={categoryButtonStyles.container}>
            <TouchableOpacity onPress={handleOnPress}>
                <Text style={flag ? categoryButtonStyles.selectedCategory : categoryButtonStyles.category}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
}