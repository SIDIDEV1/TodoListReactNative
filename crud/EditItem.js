import { Modal, TextInput } from "react-native"
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import { useState } from "react"

export default function EditItem({ isOpen, setIsOpen, sumbitEdit, data }) {
    const [item, setItem] = useState(data)

    return (
        <Modal
            animationType="slide"
            visible={isOpen}
        >

            <SafeAreaView className="flex-1 items-center justify-center">
                <View className="relative flex-1 justify-center p-5 w-full m-[20px]">
                    <TouchableOpacity className="absolute top-0 right-5 bg-blue-500 rounded-md" onPress={setIsOpen}>
                        <Ionicons name="close" size={35} color="#ffffff" />
                    </TouchableOpacity>
                    <Text className="text-2xl font-semibold text-center mb-4">Only smart can see</Text>

                    <TextInput
                        className="border-b-2 border-blue-500 py-3 px-2 mb-5"
                        placeholder='Ehh ohh modifier ici'
                        onChangeText={text => setItem({ ...item, name: text })}
                        value={item.name}
                        onSubmitEditing={() => sumbitEdit(item)}
                    />
                </View>
            </SafeAreaView>
        </Modal>

    )
}