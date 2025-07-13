// Annotation, as and satisfied

 type Footer = string | {
  text: string, iconURL?: string
}

 const footerA: Footer = "Administracao";
 const footerB = "Administracao" as Footer;
 const footerC = "Administracao" satisfies Footer;

 //
 const footerD: Footer = {
  text: "Administracao"
}

 const footerE = {
  text: "Administracao",
  title: "Jeffren"
} as Footer;

  const footerF = {
    text: "Administracao"
} satisfies Footer;

//
type Cooldowns = Record<string, number>;

const cooldowns = {
  Cristiano: 20,
  Marcelo: 30,
  Ronaldo: 8
} satisfies Cooldowns

//
type Properties = {filePath: string, private?: boolean}
type Commands = Record<string, Properties>

const commands = {
  ping: {
    filePath: "/commands/ping.ts",
    private: false
  }
} as Commands;