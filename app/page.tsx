"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  const [form, setForm] = useState({ nome: "", email: "", empresa: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", form);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Gestão de Obras para Brasileiros na Holanda
        </h1>
        <p className="text-gray-600 mb-8">
          Plataforma SaaS para gerar propostas, faturas, controlar obras e
          funcionários — em português, inglês e holandês.
        </p>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="nome"
                placeholder="Seu nome"
                value={form.nome}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Seu email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Input
                name="empresa"
                placeholder="Nome da empresa"
                value={form.empresa}
                onChange={handleChange}
              />
              <Button type="submit" className="w-full">
                Quero ser avisado no lançamento
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
