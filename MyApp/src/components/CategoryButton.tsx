import React, { useState } from 'react'
import {View, Text, TouchableOpacity} from 'react-native';
import categoryButtonStyles from '../styles/categoryButtonStyles';

//Categorias predefinidas para las votaciones

interface Props{
    name:string,
    id:number,
    addCategory: (id:number) => void,
}

export default function CategoryButton({name, id, addCategory}:Props){
    //Bandera para identificar si se presiono la categoria
    const [flag, setFlag] = useState(false);


    const handleOnPress = () => {
        setFlag(!flag);
        addCategory(id);//Se añade la categoria a una lista en CategoryScreen
    }

    return(
        <View style={categoryButtonStyles.container}>
            <TouchableOpacity onPress={handleOnPress}>
                <Text style={flag ? categoryButtonStyles.selectedCategory : categoryButtonStyles.category}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
}