import React, { useState } from 'react'
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import catgoriesJson from "./categories.json"
import HeaderContainerPrueba from './HeaderContainer';
import ContentContainer from './ContentContainer';
import CategoryButton from '../../components/CategoryButton';
import categoriesScreenStyles from '../../styles/CategoriesScreen/CategoriesScreenStyles';
import globalStyles from '../../styles/globalStyles';

export default function CategoriesScreen(){
    const [list, setList] = useState<number[]>([]);

    const addCategory = (id:number) => {
        if(list.includes(id)){
           setList(list.filter(item => item !== id));
        }else{
            setList(prevList => [...prevList,id]);
        }
    }
    return(
        <View style={globalStyles.container}>
            <HeaderContainerPrueba>
                <Text></Text>
            </HeaderContainerPrueba>

            <ContentContainer>
                <View style={categoriesScreenStyles.categoryContainer}>
                    {catgoriesJson.categories.map((category) => (
                        <CategoryButton 
                            key={category.id} 
                            id={category.id} 
                            name={category.name}
                            addCategory={addCategory} 
                        />
                    ))}
                </View>
            </ContentContainer>
        </View>
    );
}

