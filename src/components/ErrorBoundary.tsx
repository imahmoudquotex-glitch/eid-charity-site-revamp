import { Component, ErrorInfo, ReactNode } from "react";
import { useLang } from "@/contexts/LanguageContext";

interface State { hasError: boolean; }

function ErrorDisplay({ onRetry }: { onRetry: () => void }) {
  const { t } = useLang();
  const e = t.errorBoundary;
  
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">⚠️</div>
        <h1 className="text-2xl font-black mb-3 text-foreground">{e.title}</h1>
        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">{e.sub}</p>
        <button
          onClick={onRetry}
          className="gradient-red-blue text-white px-8 py-3 rounded-full font-black shadow-lg hover:scale-[1.04] transition-all duration-300 btn-glow"
        >
          {e.retry}
        </button>
      </div>
    </div>
  );
}

class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[قلب الحياة ErrorBoundary]", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorDisplay onRetry={() => window.location.reload()} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
