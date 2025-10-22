import { ScrollView, View, Text, TouchableOpacity, Linking } from "react-native";
import { ProfileSection } from "./components/ProfileSection";
import { SkillCard } from "./components/SkillCard";
import { ProjectCard } from "./components/ProjectCard";

export default function App() {
  // 🧠 Habilidades
  const skills = [
    { emoji: "💻", name: "React Native" },
    { emoji: "⚛️", name: "React" },
    { emoji: "🎨", name: "TailwindCSS" },
    { emoji: "📱", name: "TypeScript" },
    { emoji: "🔥", name: "Firebase" },
  ];

  // 🚀 Proyectos
  const projects = [
    {
      emoji: "🧠",
      title: "Playful Learning",
      description:
        "Plataforma educativa con gamificación y recompensas digitales (BrainCoins) para aumentar la participación estudiantil.",
      tags: ["React", "Firebase", "Gamificación"],
    },
    {
      emoji: "📚",
      title: "EduTrack",
      description:
        "Sistema web para seguimiento académico de estudiantes y gestión de tareas en línea.",
      tags: ["Next.js", "Supabase", "TailwindCSS"],
    },
    {
      emoji: "💰",
      title: "BrainCoins Wallet",
      description:
        "App móvil donde los estudiantes gestionan y canjean sus monedas digitales obtenidas por desempeño académico.",
      tags: ["Expo", "TypeScript", "Firebase"],
    },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* PERFIL */}
      <ProfileSection />

      {/* HABILIDADES */}
      <View className="px-6 mt-6">
        <Text className="text-xl font-bold text-gray-800 mb-4">Habilidades</Text>
        {skills.map((skill, index) => (
          <SkillCard key={index} emoji={skill.emoji} name={skill.name} />
        ))}
      </View>

      {/* PROYECTOS */}
      <View className="px-6 mt-8">
        <Text className="text-xl font-bold text-gray-800 mb-4">Proyectos</Text>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            emoji={project.emoji}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </View>

      {/* CONTACTO */}
      <View className="px-6 mt-8 mb-10 items-center">
        <Text className="text-xl font-bold text-gray-800 mb-2">Contacto</Text>

        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:tucorreo@ejemplo.com")}
          className="bg-blue-500 rounded-full px-6 py-3 mb-3"
        >
          <Text className="text-white font-semibold">📧 Enviar correo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/tuusuario")}
          className="bg-gray-800 rounded-full px-6 py-3"
        >
          <Text className="text-white font-semibold">🐙 Ver en GitHub</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
