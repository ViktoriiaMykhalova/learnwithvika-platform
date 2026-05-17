import Script from "next/script";

export default function RequestPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/landing/style.css" />

      <div
        dangerouslySetInnerHTML={{
          __html: `
<main class="container">
  <div class="main-block">
    <section class="section">
      <h2 id="requestTitle">📝 Leave a request</h2>
      <p class="section-desc" id="requestDesc">Fill in the form — I’ll text you within 24 hours.</p>

      <div id="okMsg" style="display:none; margin-top:12px; padding:12px; border-radius:14px; border:1px solid var(--line); background:var(--chip);">
        ✅ <b id="okText">Sent! I will contact you soon.</b>
      </div>

      <div id="errMsg" style="display:none; margin-top:12px; padding:12px; border-radius:14px; border:1px solid rgba(255,0,0,.35); background:color-mix(in oklab, #ff0000 10%, var(--chip));">
        ❌ <b id="errText">Something went wrong. Please try again.</b>
      </div>

      <form id="leadForm" style="display:grid; gap:12px; margin-top:14px;">
        <input name="name" placeholder="Name" required
          style="padding:12px;border-radius:12px;border:1px solid var(--line);background:var(--chip);color:var(--text);" />

        <input name="email" type="email" placeholder="Email" required
          style="padding:12px;border-radius:12px;border:1px solid var(--line);background:var(--chip);color:var(--text);" />

        <input name="level" placeholder="Level (A1–C2)"
          style="padding:12px;border-radius:12px;border:1px solid var(--line);background:var(--chip);color:var(--text);" />

        <textarea name="message" placeholder="Message" rows="4"
          style="padding:12px;border-radius:12px;border:1px solid var(--line);background:var(--chip);color:var(--text);resize:vertical;"></textarea>

        <button id="sendBtnEl" type="submit" class="control-btn" style="width:max-content;">
          <span>🚀</span>
          <span id="sendBtn">Send</span>
        </button>
      </form>

      <p class="footer" style="margin-top:18px;">© 2025 Viktoriia English</p>
    </section>
  </div>
</main>
          `,
        }}
      />

      {/* theme + lang + translations */}
      <Script src="/landing/script.js" strategy="afterInteractive" />

      {/* AJAX submit */}
      <Script id="lead-form-submit" strategy="afterInteractive">{`
        (function(){
          const form = document.getElementById('leadForm');
          const ok = document.getElementById('okMsg');
          const okText = document.getElementById('okText');
          const err = document.getElementById('errMsg');
          const errText = document.getElementById('errText');
          const btn = document.getElementById('sendBtnEl');

          if(!form) return;

          form.addEventListener('submit', async (e) => {
            e.preventDefault(); // ✅ НЕ переходим на /api/leads

            ok.style.display = 'none';
            err.style.display = 'none';

            // disable button while sending
            if(btn){ btn.setAttribute('disabled','true'); btn.style.opacity = '0.7'; }

            try {
              const fd = new FormData(form);

              const res = await fetch('/api/leads', {
                method: 'POST',
                body: fd,
              });

              const data = await res.json().catch(() => null);

              if(!res.ok || !data || data.ok !== true){
                throw new Error(data?.error || 'Request failed');
              }

              form.reset();
              ok.style.display = 'block';

              // маленькая прокрутка к сообщению (приятно)
              ok.scrollIntoView({ behavior: 'smooth', block: 'start' });

            } catch (e) {
              err.style.display = 'block';
              errText.textContent = 'Something went wrong. Please try again.';
            } finally {
              if(btn){ btn.removeAttribute('disabled'); btn.style.opacity = '1'; }
            }
          });
        })();
      `}</Script>
    </>
  );
}
