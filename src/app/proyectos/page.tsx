import ProjectsSection from '@/app/mercados/ProjectsSection';

export const metadata = {
  title: 'Proyectos | Lion GSC',
  description: 'Todos los proyectos activos de inversión inmobiliaria en América, Europa y Asia.',
};

export default function ProyectosPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <ProjectsSection />
    </main>
  );
}
