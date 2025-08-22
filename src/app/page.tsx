"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-slate-900">
              NovaLux
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-slate-600 hover:text-slate-900 transition-colors">Inicio</a>
              <a href="#servicios" className="text-slate-600 hover:text-slate-900 transition-colors">Servicios</a>
              <a href="#nosotros" className="text-slate-600 hover:text-slate-900 transition-colors">Nosotros</a>
              <a href="#contacto" className="text-slate-600 hover:text-slate-900 transition-colors">Contacto</a>
            </div>
            <Button className="bg-slate-900 hover:bg-slate-800">
              Solicitar Demo
            </Button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                    Iluminación
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                      {" "}Inteligente
                    </span>
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    Transformamos espacios con soluciones de iluminación premium que combinan elegancia, 
                    tecnología y eficiencia energética para crear ambientes únicos.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                    Explorar Soluciones
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50">
                    Ver Portfolio
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 p-8">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/df8475a3-05a2-43cc-b5fc-c68e39eca7e0.png"
                    alt="Elegante showcase de diseño de iluminación moderna con fixtures premium y ambiente sofisticado"
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-amber-200 to-orange-200 rounded-xl flex items-center justify-center"><div class="text-center text-slate-600"><div class="text-4xl mb-4">💡</div><div class="text-lg font-medium">NovaLux Lighting</div></div></div>';
                    }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border">
                  <div className="text-sm text-slate-600">Proyectos Completados</div>
                  <div className="text-2xl font-bold text-slate-900">500+</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                  Sobre NovaLux Lighting Solutions
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Con más de 15 años de experiencia en el sector, somos líderes en diseño e implementación 
                  de soluciones de iluminación inteligente. Combinamos la artesanía tradicional con la 
                  tecnología más avanzada para crear espacios que inspiran y transforman.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-amber-500">15+</div>
                  <div className="text-slate-600">Años de Experiencia</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-amber-500">500+</div>
                  <div className="text-slate-600">Proyectos Completados</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-amber-500">98%</div>
                  <div className="text-slate-600">Satisfacción del Cliente</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                Nuestros Servicios
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Ofrecemos soluciones integrales de iluminación adaptadas a las necesidades específicas de cada proyecto
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Iluminación Residencial</CardTitle>
                  <CardDescription>
                    Diseños personalizados para hogares que combinan funcionalidad y estética
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Sistemas de iluminación inteligente</li>
                    <li>• Diseño de ambientes personalizados</li>
                    <li>• Automatización y control remoto</li>
                    <li>• Eficiencia energética</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Iluminación Comercial</CardTitle>
                  <CardDescription>
                    Soluciones profesionales para espacios comerciales y corporativos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Iluminación de oficinas y retail</li>
                    <li>• Sistemas de emergencia</li>
                    <li>• Control de iluminación avanzado</li>
                    <li>• Mantenimiento especializado</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Consultoría Especializada</CardTitle>
                  <CardDescription>
                    Asesoramiento experto para proyectos de gran envergadura
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Análisis de eficiencia energética</li>
                    <li>• Diseño arquitectónico lumínico</li>
                    <li>• Certificaciones y normativas</li>
                    <li>• Gestión integral de proyectos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                ¿Listo para Transformar tu Espacio?
              </h2>
              <p className="text-xl text-slate-300">
                Contacta con nuestros expertos y descubre cómo podemos llevar tu proyecto de iluminación al siguiente nivel
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                  Solicitar Consulta Gratuita
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                  Ver Casos de Éxito
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contacto" className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-slate-900">NovaLux</div>
              <p className="text-slate-600">
                Transformando espacios con iluminación inteligente y diseño excepcional.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900">Servicios</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Iluminación Residencial</li>
                <li>Iluminación Comercial</li>
                <li>Consultoría Especializada</li>
                <li>Mantenimiento</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900">Empresa</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Sobre Nosotros</li>
                <li>Portfolio</li>
                <li>Testimonios</li>
                <li>Carreras</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900">Contacto</h3>
              <ul className="space-y-2 text-slate-600">
                <li>+54 11 4567-8900</li>
                <li>info@novalux.com.ar</li>
                <li>Buenos Aires, Argentina</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 mt-12 pt-8 text-center text-slate-600">
            <p>&copy; 2024 NovaLux Lighting Solutions. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
