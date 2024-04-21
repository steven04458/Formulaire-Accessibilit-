# Design System

## Tailles d'écran

Les designs ont été créés avec les largeurs d'écran suivantes :
- Mobile: 375px
- Desktop: 1440px

## Colors

- Linear gradient (active input border): hsl(249, 99%, 64%) to hsl(278, 94%, 30%)
- Red (input errors): hsl(0, 100%, 66%)
- White: hsl(0, 0%, 100%)
- Light violet: hsl(270, 3%, 87%)
- Dark violet: hsl(279, 6%, 55%)
- Very violet: hsl(278, 68%, 11%)

## Typographie

- Font size: 18px
- Family: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- Weights: 500

## COLORS

$light: #f6f5f3;
$accent: #9747ff;
$accent-dark: #21004d;
$dark: #071013;

$gradient: linear-gradient(0deg, $dark 0%, $accent-dark 100%);
$shadow: 0 0 20px -5px $dark;

$soft-radius: 10px;
$strong-radius: 20px;
$button-radius: 500px;

## MEDIA QUERIES

@mixin desktop {
  @media screen and (min-width: 900px) {
    @content;
  }
}
@mixin tablet {
  @media screen and (min-width: 600px) {
    @content;
  }
}

## UTILISATIONS
nav {
  display: none;
  @include tablet {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;  
    background-color: $dark;
    border-radius: $soft-radius;
  }
  @include desktop {
    flex-direction: row;
  }
}