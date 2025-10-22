import { View, Text, Image } from "react-native";

export function ProfileSection() {
  const name = "Maicol Varon";
  const role = "Estudiante de Desarrollo de Software";
  const bio =
    "Apasionado por la tecnología, la educación y la creación de soluciones digitales que mejoren el aprendizaje.";

    
  return (
    
    <View style={{ marginTop: 50 }} className="items-center py-10 bg-blue-100">

        <Image source={require("../assets/PerfilFoto.jpg")} style={{ width: 100, height: 100, borderRadius: 50 }} />

      <Text className="text-2xl font-bold text-gray-800">{name}</Text>
      <Text className="text-lg text-gray-600 mb-2">{role}</Text>
      <Text className="text-base text-gray-700 leading-6 text-center px-6">{bio}</Text>
    </View>
  );
}
