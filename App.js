import { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, Text, TextInput, View, ScrollView, Alert, FlatList, Keyboard, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [data, setData] = useState('')
  const [newData, setNewData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editText, setEditText] = useState({})

  const handleChange = (text) => {
    setData(text)
  }

  const submitItem = (text) => {
    if (text === '') {
      Alert.alert('Oupss', 'Ce champ ne doit pas être vide !')
    } else {
      setNewData(prevData => [
        ...prevData,
        {
          name: text,
          id: newData.length === 0 ? 1 : newData[newData.length - 1].id + 1
        }
      ])
      setData('')
      Keyboard.dismiss()
    }
  }

  const deleteItem = (id) => {
    setNewData(prevData => {
      return prevData.filter(data => data.id !== id)
    })
  }

  const editItem = (item) => {
    setEditText(item)
    setShowModal(true)
  }

  const sumbitEdit = (e) => {
    if (e.name === '') {
      Alert.alert(`Oupss ${e.id}`, 'Ce champ ne doit pas être vide !')
    }
    else {
      setNewData(prevData => {
        return prevData.map(item => {
          if (item.id === e.id) {
            return {
              ...item,
              name: e.name
            }
          }
          return item
        })
      })
      setShowModal(false)
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-200 relative">
      <View className="flex-1 p-6">
        <Modal
          animationType="slide"
          visible={showModal}
        >
          <SafeAreaView className="flex-1 items-center justify-center">
            <View className="relative flex-1 justify-center p-5 w-full m-[20px]">
              <TouchableOpacity className="absolute top-0 right-5 bg-blue-500 rounded-md" onPress={() => { setShowModal(!showModal) }}>
                <Ionicons name="close" size={35} color="#ffffff" />
              </TouchableOpacity>
              <Text className="text-2xl font-semibold text-center mb-4">Only smart can see</Text>

              <TextInput
                className="border-b-2 border-blue-500 py-3 px-2 mb-5"
                placeholder='Ehh ohh modifier ici'
                onChangeText={text => setEditText({ ...editText, name: text })}
                value={editText.name}
                onSubmitEditing={() => sumbitEdit(editText)}
              />
            </View>
          </SafeAreaView>
        </Modal>


        <TextInput
          className="border-b-2 border-blue-500 py-3 px-2 mb-5"
          placeholder='Ehh ohh tapez ici'
          value={data}
          onChangeText={handleChange}
          onSubmitEditing={() => submitItem(data)}
        />
        {/* <Pressable
          onPress={() => submitItem(data)}
          className="z-50 absolute bottom-4 right-6 bg-blue-500 text-white w-16 h-16 rounded-full active:bg-blue-700"
        >
          <View className="flex-1 justify-center text-center items-center">
            <Ionicons name="add-sharp" size={35} color="white" />
          </View>
        </Pressable> */}
        <ScrollView className="gap-4">
          {newData.map((item, index) =>
            <View className="bg-white p-4 rounded-xl" key={index}>
              <TouchableOpacity onPress={() => editItem(item)} className="flex flex-row justify-between items-center">
                <Text key={item.id}>{item.id} - {item.name}</Text>
                <TouchableOpacity onPress={() => deleteItem(item.id)}>
                  <Ionicons name="trash-sharp" size={24} color="#FECACA" />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          )}
          {/* <FlatList 
          data={newData}
          renderItem={}
          /> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
