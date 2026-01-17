'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Rastreamento de scroll
  useEffect(() => {
    const scrollMarks = [25, 50, 75, 100]
    const scrolled: number[] = []

    const handleScroll = () => {
      const scrollPercent = 
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100

      scrollMarks.forEach(mark => {
        if (scrollPercent >= mark && !scrolled.includes(mark)) {
          scrolled.push(mark)
          if (window.gtag) {
            window.gtag('event', 'scroll_depth', {
              event_category: 'engajamento',
              event_label: `${mark}%`,
              value: mark,
              page_path: pathname
            })
            console.log('📊 Scroll rastreado:', `${mark}%`) // ← LOG ADICIONADO
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  // Rastreamento global de cliques
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const trackElement = target.closest('[data-track]')
      
      if (trackElement && window.gtag) {
        const eventName = trackElement.getAttribute('data-track') || 'click'
        const category = trackElement.getAttribute('data-track-category') || 'interacao'
        const label = trackElement.getAttribute('data-track-label') || trackElement.textContent?.trim()
        const value = trackElement.getAttribute('data-track-value')
        
        window.gtag('event', eventName, {
          event_category: category,
          event_label: label,
          ...(value && { value: parseInt(value) }),
          element_type: trackElement.tagName.toLowerCase(),
          page_path: pathname
        })
        
        console.log('📊 Evento rastreado:', { eventName, category, label }) // ← LOG ADICIONADO
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [pathname])

  // Rastreamento de formulários
  useEffect(() => {
    const handleFormSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement
      const formName = form.getAttribute('data-form-name') || form.id || 'unnamed_form'
      
      if (window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'formulario',
          event_label: formName,
          page_path: pathname
        })
        console.log('📊 Formulário enviado:', formName) // ← LOG ADICIONADO
      }
    }

    const handleFormFocus = (e: Event) => {
      const input = e.target as HTMLInputElement
      const formName = input.form?.getAttribute('data-form-name') || input.form?.id
      const fieldName = input.name || input.id
      
      if (window.gtag && formName) {
        window.gtag('event', 'form_start', {
          event_category: 'formulario',
          event_label: formName,
          form_field: fieldName,
          page_path: pathname
        })
        console.log('📊 Formulário iniciado:', { formName, fieldName }) // ← LOG ADICIONADO
      }
    }

    document.addEventListener('submit', handleFormSubmit)
    document.addEventListener('focus', handleFormFocus, true)
    
    return () => {
      document.removeEventListener('submit', handleFormSubmit)
      document.removeEventListener('focus', handleFormFocus, true)
    }
  }, [pathname])

  // Rastreamento de tempo na página
  useEffect(() => {
    const startTime = Date.now()

    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      
      if (window.gtag && timeSpent > 5) {
        window.gtag('event', 'time_on_page', {
          event_category: 'engajamento',
          value: timeSpent,
          page_path: pathname,
          non_interaction: true
        })
        console.log('📊 Tempo na página:', `${timeSpent}s`) // ← LOG ADICIONADO
      }
    }

    window.addEventListener('beforeunload', trackTimeOnPage)
    return () => {
      trackTimeOnPage()
      window.removeEventListener('beforeunload', trackTimeOnPage)
    }
  }, [pathname])

  // Rastreamento de erros JavaScript
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: event.message,
          fatal: false,
          page_path: pathname
        })
        console.log('📊 Erro rastreado:', event.message) // ← LOG ADICIONADO
      }
    }

    window.addEventListener('error', handleError)
    return () => window.removeEventListener('error', handleError)
  }, [pathname])

  return <>{children}</>
}