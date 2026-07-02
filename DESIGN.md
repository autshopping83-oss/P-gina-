# Design

## Brand System
Biz-flow usa uma paleta azul-ciano profissional com superfícies claras e toques de contraste forte para chamadas à ação. A estética é contemporânea, acessível e confiante, com um tom local que evita o visual SaaS global frio.

## Palette
- `--color-primary`: #1A73E8
- `--color-primary-dark`: #0D47A1
- `--color-accent`: #00BCD4
- `--color-surface`: #F5F7FA
- `--color-surface-alt`: #FFFFFF
- `--color-text`: #1F2937
- `--color-muted`: #6B7280
- `--color-inverse`: #0F172A
- `--color-inverse-muted`: #9CA3AF
- `--color-border`: #E5E7EB

## Typography
- `--font-sans`: Inter, ui-sans-serif, system-ui, sans-serif
- `--font-display`: Outfit, ui-sans-serif, system-ui, sans-serif
- Heading scale: 3rem / 2.5rem / 2rem / 1.5rem
- Body text: 1rem, line-height 1.75
- Small text: 0.875rem, line-height 1.6

## Layout
- Grid breakpoints: mobile first com `repeat(auto-fit, minmax(280px, 1fr))` onde apropriado.
- Espaçamento: `1.5rem` entre blocos grande, `1rem` entre grupos compactos.
- Superfícies: bordas suaves (16px–32px), sombras suaves; evitar bordas coloridas dominantes.
- Elementos principais: hero claro com foco em valor, seções de recursos com cards limpos e painéis de contraste para ofertas especiais.

## Components
- Botões primários: fundo `--color-primary`, texto branco, canto `24px`, sombra suave.
- Botões secundários: fundo branco com borda `--color-border`, texto `--color-text` e foco evidente.
- Cards: fundo `--color-surface-alt`, borda `--color-border`, canto `24px`.
- Labels: texto uppercase com tracking leve, no máximo um pequeno kicker por seção.

## Motion
- Transições suaves de 180ms–220ms para hover/focus.
- Animações de entrada leves em hero e cards, com redução de movimento respeitada via preferências do sistema.

## Imagery
- Preferir capturas de tela reais ou imagens de produto locais.
- Se imagens de stock forem usadas, escolher fotos com contexto de finanças, empreendedorismo e pequenos negócios, evitando fotos genéricas de escritório.
- Sempre fornecer `alt` claro e descritivo.
