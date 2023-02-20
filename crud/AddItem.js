import { useState } from "react";
import { Keyboard, TextInput, View } from "react-native";

export default function AddItem({ submitItem }) {
    const [text, setText] = useState('')

    const handleChange = (newText) => {
        setText(newText)
    }

    const handleSumbit = () => {
        submitItem(text)
        setText('')
        Keyboard.dismiss()
    }

    return (
        <View>
            <TextInput
                className="border-b-2 border-blue-500 py-3 px-2 mb-5"
                placeholder='Ehh ohh tapez ici'
                value={text}
                onChangeText={handleChange}
                onSubmitEditing={handleSumbit}
            />
        </View>
    )
}