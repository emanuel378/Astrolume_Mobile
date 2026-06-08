import 'package:flutter/material.dart';

class AstroBackground extends StatelessWidget {
  final Widget child;

  const AstroBackground({
    super.key,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [
              Color(0xff08012E),
              Color(0xff14004E),
              Color(0xff1D0A63),
            ],
          ),
        ),
        child: SafeArea(child: child),
      ),
    );
  }
}