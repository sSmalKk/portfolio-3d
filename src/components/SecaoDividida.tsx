import type { ReactNode } from 'react';

interface SecaoDivididaProps {
  id: string;
  titulo: string;
  /** Linha pequena acima do título. */
  chamada?: string;
  /** Texto curto embaixo do título, na mesma coluna. */
  apoio?: ReactNode;
  /** De que lado fica o título no desktop; as seções alternam. */
  lado?: 'esquerda' | 'direita';
  children: ReactNode;
}

/**
 * Seção em duas colunas no desktop: título de um lado, conteúdo do outro.
 * No celular vira uma coluna só, com o título em cima.
 */
const SecaoDividida = ({ id, titulo, chamada, apoio, lado = 'esquerda', children }: SecaoDivididaProps) => {
  const direita = lado === 'direita';

  return (
    <section id={id} className="scroll-mt-20 py-14 sm:py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
        <header
          className={`lg:col-span-4 lg:sticky lg:top-28 lg:self-start ${
            direita ? 'lg:order-2 lg:text-right' : ''
          }`}
        >
          {chamada && (
            <p className="text-xs sm:text-sm tracking-[0.16em] text-white/60 uppercase mb-3">{chamada}</p>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">{titulo}</h2>
          <span
            className={`mt-4 block h-[3px] w-12 rounded-full bg-[#3178C6] ${direita ? 'lg:ml-auto' : ''}`}
            aria-hidden="true"
          />
          {apoio && <div className="mt-5 text-white/70 text-sm sm:text-base leading-relaxed">{apoio}</div>}
        </header>

        <div
          className={`lg:col-span-8 min-w-0 bg-white/[0.06] backdrop-blur-md border border-white/15 rounded-xl p-5 sm:p-8 ${
            direita ? 'lg:order-1' : ''
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default SecaoDividida;
