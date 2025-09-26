'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { LogIn, UserPlus, Mail, Lock } from "lucide-react"
import { toast } from "react-hot-toast"

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      toast.error("Заполните все поля")
      return
    }

    if (isLogin) {
      // тут авторизация
      toast.success("Вы вошли в систему ✅")
      router.push("/")
    } else {
      // тут быстрая регистрация (без подтверждения email)
      toast.success("Аккаунт создан 🎉")
      router.push("/")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 font-medium rounded-l-xl transition 
              ${isLogin ? "bg-black text-white" : "bg-gray-100 text-gray-600"}`}
          >
            Войти
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 font-medium rounded-r-xl transition 
              ${!isLogin ? "bg-black text-white" : "bg-gray-100 text-gray-600"}`}
          >
            Регистрация
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
          >
            {isLogin ? (
              <>
                <LogIn className="w-5 h-5" /> Войти
              </>
            ) : (
              <>
                <UserPlus className="w-5 h-5" /> Зарегистрироваться
              </>
            )}
          </button>
        </form>

        {/* Подсказка */}
        <p className="text-center text-sm text-gray-500 mt-4">
          {isLogin
            ? "Нет аккаунта? "
            : "Уже есть аккаунт? "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-black font-medium cursor-pointer"
          >
            {isLogin ? "Зарегистрируйтесь" : "Войдите"}
          </span>
        </p>
      </div>
    </div>
  )
}
