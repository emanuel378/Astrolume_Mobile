import 'package:flutter/material.dart';
import 'home_page.dart';
import 'login_page.dart';
import 'cadastro_page.dart';
import 'esqueceu_senha_page.dart';
import 'dashboard_page.dart';

void main() {
  runApp(const AstroLume());
}

class AstroLume extends StatelessWidget {
  const AstroLume({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Astro Lume',

      theme: ThemeData(
        fontFamily: 'Poppins',
        primarySwatch: Colors.blue,
      ),

      // Tela inicial
      initialRoute: '/',

      routes: {
        '/': (context) => const HomePage(),
        '/cadastro': (context) => const CadastroPage(),
        '/login': (context) => const LoginPage(),
        '/senha': (context) => const EsqueceuSenhaPage(),
        '/dashboard': (context) => const DashboardPage(),
      },
    );
  }
}