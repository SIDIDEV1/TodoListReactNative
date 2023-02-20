import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import EditItem from "./EditItem"
import { ScrollView } from "react-native-gesture-handler"

export default function List({ data, editItem, deleteItem, isOpen, setIsOpen, sumbitEdit, editText }) {
    return (
        <View className="flex-1">
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => item.id}
                data={data}
                renderItem={
                    ({ item }) => (
                        <View className="bg-white p-4 rounded-xl mb-2">
                            <TouchableOpacity onPress={() => editItem(item)} className="flex flex-row justify-between items-center">
                                <Text className="flex-1 mr-5 font-semibold" key={item.id}>
                                    {item.name}
                                </Text>
                                <TouchableOpacity onPress={() => deleteItem(item.id)}>
                                    <Ionicons name="trash-sharp" size={24} color="#FECACA" />
                                </TouchableOpacity>
                            </TouchableOpacity>
                            {editText.id === item.id && (
                                <EditItem
                                    data={item}
                                    isOpen={isOpen}
                                    setIsOpen={setIsOpen}
                                    sumbitEdit={sumbitEdit}
                                />
                            )}
                        </View>
                    )
                }

            />
        </View>
    )
}