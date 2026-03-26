import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, MessageCircle, Phone, Sparkles, Users, Zap } from "lucide-react";

/**
 * Design Philosophy: Wellness Organic with Natural Textures
 * - Warm color palette: Terracota (accent), Bege (background), Verde-oliva (secondary)
 * - Typography: Playfair Display (titles) + Lato (body)
 * - Organic shapes, wave dividers, smooth animations
 * - Focus on conversion with clear CTAs
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Na Tua Pele</div>
          <div className="hidden md:flex gap-8">
            <a href="#problema" className="hover:text-primary transition-colors">Problema</a>
            <a href="#solucao" className="hover:text-primary transition-colors">Solução</a>
            <a href="#opcoes" className="hover:text-primary transition-colors">Opções</a>
            <a href="#feedback" className="hover:text-primary transition-colors">Resultados</a>
          </div>
        </div>
      </nav>

      {/* 1. HERO - Primeira dobra */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663405842021/o5p8ErLQCeP4Sj76Zf9guS/hero-skin-analysis-Hk3GtpiWpX3tfPJ7svUB3w.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-white text-4xl md:text-5xl leading-tight">
              Descubra o que a sua pele realmente precisa
            </h1>
            <p className="text-white/90 text-lg md:text-xl">
              Transforme os seus resultados com avaliação de pele profissional (presencial ou online) + plano personalizado para tratar acne, manchas e sinais de envelhecimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-full text-base font-semibold"
              >
                👉 Fazer Avaliação Presencial
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full text-base font-semibold"
              >
                👉 Fazer Avaliação Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative h-20 bg-background overflow-hidden">
        <svg 
          className="absolute w-full h-full text-white"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* 2. PROBLEMA + IDENTIFICAÇÃO */}
      <section id="problema" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-primary mb-6">A sua pele não melhora… mesmo usando produtos?</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Se você já tentou vários produtos e não viu resultado, o problema pode não ser o produto — mas sim o diagnóstico errado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Zap, title: "Acne que não desaparece", desc: "Persistente e frustrante" },
              { icon: Sparkles, title: "Manchas persistentes", desc: "Afetam a confiança" },
              { icon: Users, title: "Pele oleosa ou seca sem controlo", desc: "Desequilíbrio constante" },
              { icon: CheckCircle2, title: "Sinais de envelhecimento precoce", desc: "Rugas e flacidez" },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-0 bg-muted/50">
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-secondary/10 rounded-3xl">
            <p className="text-xl font-semibold text-secondary">
              👉 Cada pele precisa de uma estratégia diferente.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SOLUÇÃO (A SUA OFERTA) */}
      <section id="solucao" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-primary mb-6">Aqui começa a transformação da sua pele</h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Com a nossa avaliação profissional, identificamos exatamente o que a sua pele precisa e criamos um plano simples, eficaz e personalizado.
              </p>
              <div className="space-y-4">
                {[
                  "Diagnóstico detalhado da pele",
                  "Identificação do problema principal",
                  "Rotina personalizada",
                  "Recomendações de produtos certos (sem desperdício)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div 
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663405842021/o5p8ErLQCeP4Sj76Zf9guS/skin-problem-solution-HNdsGxQGfDoZeoeRtjp8zQ.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                aspectRatio: '16/9'
              }}
            />
          </div>
        </div>
      </section>

      {/* 4. ESCOLHA COMO QUER SER ATENDIDA */}
      <section id="opcoes" className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-center text-primary mb-16">Escolha como quer ser atendida</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Presencial */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <div className="text-5xl mb-6">🏢</div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Avaliação Presencial</h3>
              <p className="text-foreground/70 mb-6">
                Ideal para quem quer um acompanhamento mais próximo.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Análise direta da pele</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Orientação personalizada no local</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Experiência completa</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                👉 Marcar Avaliação Presencial
              </Button>
            </Card>

            {/* Online */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <div className="text-5xl mb-6">📱</div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Avaliação Online</h3>
              <p className="text-foreground/70 mb-6">
                Prática e acessível, sem sair de casa.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Envio de fotos da pele</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Diagnóstico profissional</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Plano completo via WhatsApp</span>
                </li>
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-full">
                👉 Fazer Avaliação Online
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. QUEM SOMOS NÓS */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container max-w-3xl">
          <div className="text-center space-y-6">
            <h2 className="text-primary">Especialistas em transformar peles reais</h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Na Tua Pele, acreditamos que cada pele é única — e merece um tratamento personalizado.
              </p>
              <p>
                Trabalhamos com soluções eficazes, seguras e adaptadas à realidade de cada cliente.
              </p>
              <p className="text-xl font-semibold text-primary pt-4">
                Nosso foco não é só vender produtos — é entregar resultados visíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEEDBACKS (PROVA SOCIAL) */}
      <section id="feedback" className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-center text-primary mb-16">Resultados reais de clientes reais</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              { name: "Maria Silva", result: "Acne desapareceu em 8 semanas", image: "👩" },
              { name: "João Santos", result: "Manchas reduzidas significativamente", image: "👨" },
              { name: "Ana Costa", result: "Pele luminosa e controlada", image: "👩‍🦰" },
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-6 text-center border-0 bg-muted/50 hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">{testimonial.image}</div>
                <h4 className="font-semibold mb-2">{testimonial.name}</h4>
                <p className="text-foreground/70 italic">"{testimonial.result}"</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full"
            >
              Ver mais resultados
            </Button>
          </div>
        </div>
      </section>

      {/* 7. QUEBRA DE OBJEÇÕES */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-center text-primary mb-16">Ainda tem dúvidas?</h2>
          
          <div className="space-y-6">
            {[
              {
                objection: "Já usei tudo e nada funciona",
                answer: "Falta diagnóstico correto"
              },
              {
                objection: "Não tenho tempo",
                answer: "Avaliação online resolve"
              },
              {
                objection: "Tenho medo de gastar dinheiro à toa",
                answer: "Plano direcionado evita desperdício"
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-primary bg-white">
                <div className="flex gap-4">
                  <span className="text-2xl">❌</span>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-2">"{item.objection}"</p>
                    <p className="text-foreground/70">→ {item.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL (FORTE E IRRESISTÍVEL) */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-secondary"></div>
        </div>

        <div className="container relative z-10 max-w-3xl text-center space-y-8">
          <h2 className="text-primary">A sua pele não vai mudar sozinha</h2>
          
          <p className="text-lg text-foreground/80 leading-relaxed">
            Quanto mais você espera, mais o problema pode piorar.
            <br />
            <span className="text-xl font-semibold text-primary">Comece hoje com a orientação certa.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full text-base font-semibold px-8"
            >
              👉 Quero minha Avaliação Presencial
            </Button>
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white rounded-full text-base font-semibold px-8"
            >
              👉 Quero minha Avaliação Online
            </Button>
          </div>

          <div className="pt-8 space-y-3 text-sm font-semibold text-foreground/80">
            <div>🎁 Vagas limitadas por semana</div>
            <div>🎁 Atendimento personalizado</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container text-center space-y-4">
          <p className="font-semibold text-lg">Na Tua Pele</p>
          <p className="text-white/70">Avaliação Profissional de Pele</p>
          <div className="flex justify-center gap-6 pt-4">
            <a href="#" className="hover:text-primary transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Email</a>
          </div>
          <p className="text-white/50 text-sm pt-4">© 2026 Na Tua Pele. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
