# Infraestrutura de Monitoramento - Vagrant

Este ambiente possui a ferramenta **Netdata** instalada automaticamente para monitoramento de performance e saúde do sistema em tempo real.

## Como Visualizar os Dados Coletados

**1. Acessar o Painel Web (Dashboard):**

O Netdata roda por padrão na porta `19999`. Após iniciar a máquina virtual com o `vagrant up`, abra o seu navegador e acesse:

http://192.168.56.11:19999

## Testando o Alerta de CPU (80%)

Para testar se o alerta configurado está funcionando e disparando as notificações, você pode estressar a CPU utilizando a ferramenta `stress-ng` que foi instalada na máquina virtual.

**1. Acesse a máquina virtual via SSH:**
```bash
vagrant ssh vm2
```

**2. Execute o comando abaixo para elevar o uso da CPU para 90% por um período de 20 segundos:**

```Bash
stress-ng --cpu 0 --cpu-load 90 --timeout 20s
```

Acompanhe o Dashboard do Netdata na aba Alarms (canto superior direito) para ver o estado do alerta mudar de Clear (Verde) para Warning (Amarelo/Vermelho).


---

### 4. Adicionando as Mudanças ao Git

Por fim, vamos commitar as alterações exatamente nos arquivos solicitados.

```bash
# Adiciona os arquivos específicos ao stage do Git
git add vagrant/data/configurar-monitoramento.yml
git add vagrant/Vagrantfile
git add vagrant/README.md

# Realiza o commit na branch monitoring
git commit -m "feat: adiciona instalacao do netdata, alerta de cpu e stress-ng"