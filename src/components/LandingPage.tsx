interface LandingPageProps {
  heroTitle: string;
  heroSubtitle: string;
  heroTagline: string;
  ctaText: string;
  ctaLink: string;
  primaryColor: string;
  secondaryColor: string;
  companyName: string;
}

export const LandingPage = ({
  heroTitle,
  heroSubtitle,
  heroTagline,
  ctaText,
  ctaLink,
  primaryColor,
  secondaryColor,
  companyName,
}: LandingPageProps) => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        color: '#1a1a1a',
        lineHeight: 1.6,
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          padding: '24px 32px',
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #f0f0f0',
        }}
      >
        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#000' }}>
          {companyName}
        </div>
        <a
          href={ctaLink}
          style={{
            padding: '12px 24px',
            backgroundColor: primaryColor || '#000000',
            color: '#ffffff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '0.9375rem',
            fontWeight: 600,
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.9';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {ctaText}
        </a>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          padding: '100px 32px',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '8px 16px',
            backgroundColor: '#f5f5f5',
            borderRadius: '20px',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#666',
            marginBottom: '32px',
          }}
        >
          {heroTagline}
        </div>
        <h1
          style={{
            fontSize: 'clamp(2.75rem, 6vw, 5rem)',
            fontWeight: 800,
            margin: '0 0 24px 0',
            letterSpacing: '-0.03em',
            color: '#000000',
            lineHeight: 1.1,
          }}
        >
          {heroTitle}
        </h1>
        <p
          style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
            color: '#666666',
            margin: '0 0 48px 0',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6,
          }}
        >
          {heroSubtitle}
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={ctaLink}
            style={{
              display: 'inline-block',
              padding: '18px 36px',
              backgroundColor: primaryColor || '#000000',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: 600,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {ctaText}
          </a>
          <a
            href="#learn-more"
            style={{
              display: 'inline-block',
              padding: '18px 36px',
              backgroundColor: '#f5f5f5',
              color: '#000000',
              textDecoration: 'none',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: 600,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e8e8e8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
            }}
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Trusted By Section */}
      <section
        style={{
          padding: '60px 32px',
          backgroundColor: '#fafafa',
          borderTop: '1px solid #f0f0f0',
          borderBottom: '1px solid #f0f0f0',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#999',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              margin: '0 0 32px 0',
            }}
          >
            Trusted by 100+ Founders & Growth Leaders
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '48px',
              flexWrap: 'wrap',
              opacity: 0.6,
            }}
          >
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, i) => (
              <div
                key={i}
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: '#666',
                }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section
        style={{
          padding: '100px 32px',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 700,
            textAlign: 'center',
            margin: '0 0 16px 0',
            color: '#000',
          }}
        >
          Platform in Action
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#666',
            textAlign: 'center',
            margin: '0 0 64px 0',
          }}
        >
          Powerful features that drive real results
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {[
            { icon: '💬', title: 'Chat With Data', desc: 'Ask questions and get instant insights' },
            { icon: '📊', title: 'Advanced Analytics', desc: 'Deep dive into your metrics' },
            { icon: '📈', title: 'Data to Story', desc: 'Transform numbers into narratives' },
            { icon: '🔍', title: 'Smart Search', desc: 'Find what you need instantly' },
          ].map((feature, i) => (
            <div
              key={i}
              style={{
                padding: '40px',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #f0f0f0',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = primaryColor || '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#f0f0f0';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '24px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 12px 0', color: '#000' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '1rem', color: '#666', margin: 0, lineHeight: 1.6 }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Functions Section */}
      <section
        style={{
          padding: '100px 32px',
          backgroundColor: '#fafafa',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              textAlign: 'center',
              margin: '0 0 16px 0',
              color: '#000',
            }}
          >
            Powers Growth Across Every Function
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: '#666',
              textAlign: 'center',
              margin: '0 0 64px 0',
            }}
          >
            Your AI-powered decision engine for every department
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                title: 'Sales Performance',
                desc: 'Spot revenue leaks, track targets, and auto-prioritize key customers.',
                icon: '📊',
              },
              {
                title: 'Supply Chain',
                desc: 'Predict delays, monitor OTIF, and get instant cost-reduction insights.',
                icon: '🚚',
              },
              {
                title: 'Marketing Insights',
                desc: 'Know which campaigns click, which segments stick, and where your funnel leaks.',
                icon: '📈',
              },
              {
                title: 'Operations',
                desc: 'Track machine downtime, production yield, and alerts without Excel chaos.',
                icon: '⚙️',
              },
              {
                title: 'Procurement',
                desc: 'Spot supplier risks, spend leaks, and sourcing opportunities — all in one view.',
                icon: '🛒',
              },
              {
                title: 'Finance',
                desc: 'Real-time financial insights and automated reporting for better decisions.',
                icon: '💰',
              },
            ].map((func, i) => (
              <div
                key={i}
                style={{
                  padding: '32px',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e8e8e8',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{func.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 12px 0', color: '#000' }}>
                  {func.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: '#666', margin: 0, lineHeight: 1.6 }}>
                  {func.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section
        style={{
          padding: '100px 32px',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 700,
            textAlign: 'center',
            margin: '0 0 16px 0',
            color: '#000',
          }}
        >
          It's Time to Evolve Beyond the Dashboard
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#666',
            textAlign: 'center',
            margin: '0 0 64px 0',
          }}
        >
          See how we're different from tangled legacy systems
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {/* Old Way */}
          <div
            style={{
              padding: '40px',
              backgroundColor: '#fff5f5',
              borderRadius: '16px',
              border: '2px solid #ffebee',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                margin: '0 0 32px 0',
                color: '#d32f2f',
              }}
            >
              The Old Way: Legacy Stack
            </h3>
            {[
              { icon: '🧩', title: 'A Puzzle of Disconnected Tools', desc: 'BI Tool + ETL + Data Warehouse + Alerts + Excel' },
              { icon: '⏰', title: 'Complex and Costly Setup', desc: 'Multiple integrations and maintenance overhead' },
              { icon: '📊', title: 'Manual Time-Consuming Reports', desc: 'Manual KPIs leading to multiple dashboards' },
              { icon: '🔙', title: 'Generic, Vague Metrics', desc: 'Dependent on analyst and IT, rear-view reporting' },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{item.icon}</div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600, margin: '0 0 8px 0', color: '#000' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.9375rem', color: '#666', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* New Way */}
          <div
            style={{
              padding: '40px',
              backgroundColor: '#f0f9ff',
              borderRadius: '16px',
              border: '2px solid',
              borderColor: primaryColor || '#000',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                margin: '0 0 32px 0',
                color: primaryColor || '#000',
              }}
            >
              The New Way: {companyName}
            </h3>
            {[
              { icon: '🔗', title: 'One Unified Decision Engine', desc: 'Single platform setup' },
              { icon: '⚡', title: 'Automated, Plug-and-Play Insights', desc: 'Pre-built, benchmarked data making the process easy' },
              { icon: '🎯', title: 'Direct Answers for Everyone', desc: 'No waiting on analysts or IT teams' },
              { icon: '🚀', title: 'Industry Tuned Intelligence', desc: 'Tailored KPIs with forward-looking AI suggestions' },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{item.icon}</div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600, margin: '0 0 8px 0', color: '#000' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.9375rem', color: '#666', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        style={{
          padding: '100px 32px',
          backgroundColor: '#000000',
          color: '#ffffff',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              textAlign: 'center',
              margin: '0 0 64px 0',
            }}
          >
            Real Impact - Real Fast
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '48px',
            }}
          >
            {[
              { value: '90%', label: 'Reduction in Time-to-Insight', desc: 'From data arrival to an explainable, decision-ready answer' },
              { value: '30-60%', label: 'Lower 24 Month Analytics TCO', desc: 'VS. Fabric + ETL + BI + alerting stitched stack' },
              { value: '90%', label: 'Reduction to First Value', desc: 'From kickoff to a live, ROI-bearing use case' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                    fontWeight: 800,
                    margin: '0 0 16px 0',
                    color: '#ffffff',
                  }}
                >
                  {stat.value}
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    margin: '0 0 12px 0',
                    color: '#ffffff',
                  }}
                >
                  {stat.label}
                </h3>
                <p style={{ fontSize: '1rem', color: '#cccccc', margin: 0, lineHeight: 1.6 }}>
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section
        style={{
          padding: '100px 32px',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 700,
            margin: '0 0 16px 0',
            color: '#000',
          }}
        >
          Built To Power Your Data Wherever It Lives
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#666',
            margin: '0 0 48px 0',
          }}
        >
          Seamless integrations with all your favorite tools
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px',
            flexWrap: 'wrap',
            opacity: 0.7,
          }}
        >
          {['Database', 'Cloud Storage', 'APIs', 'Spreadsheets', 'CRM', 'ERP'].map((integration, i) => (
            <div
              key={i}
              style={{
                padding: '24px 32px',
                backgroundColor: '#f5f5f5',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#666',
              }}
            >
              {integration}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section
        style={{
          padding: '100px 32px',
          backgroundColor: '#fafafa',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              fontSize: '3rem',
              marginBottom: '24px',
            }}
          >
            "
          </div>
          <p
            style={{
              fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
              fontWeight: 500,
              color: '#000',
              margin: '0 0 32px 0',
              lineHeight: 1.6,
              fontStyle: 'italic',
            }}
          >
            {companyName} transformed how we make decisions. We went from spending days on reports to getting instant insights that drive real action.
          </p>
          <div>
            <div
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: secondaryColor || '#f0f0f0',
                borderRadius: '50%',
                margin: '0 auto 16px',
              }}
            />
            <div style={{ fontWeight: 600, color: '#000', marginBottom: '4px' }}>
              Sarah Johnson
            </div>
            <div style={{ fontSize: '0.9375rem', color: '#666' }}>
              CEO, TechCorp
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section
        style={{
          padding: '80px 32px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: 700,
            textAlign: 'center',
            margin: '0 0 16px 0',
            color: '#000',
          }}
        >
          Enterprise-Grade Security. Certified.
        </h2>
        <p
          style={{
            fontSize: '1rem',
            color: '#666',
            textAlign: 'center',
            margin: '0 0 48px 0',
          }}
        >
          Regularly audited and certified by independent firms
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          {['ISO 27001', 'GDPR', 'HIPAA', 'SOC 2'].map((cert, i) => (
            <div
              key={i}
              style={{
                padding: '16px 24px',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: '#666',
              }}
            >
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        style={{
          padding: '100px 32px',
          backgroundColor: '#000000',
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              margin: '0 0 24px 0',
              lineHeight: 1.2,
            }}
          >
            Don't Let Data Sit Idle
            <br />
            Let It Work for You.
          </h2>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#cccccc',
              margin: '0 0 48px 0',
              lineHeight: 1.6,
            }}
          >
            Transform raw data into a decision engine giving you clarity on what's happening, why it matters, and how to act.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={ctaLink}
              style={{
                display: 'inline-block',
                padding: '18px 36px',
                backgroundColor: '#ffffff',
                color: '#000000',
                textDecoration: 'none',
                borderRadius: '10px',
                fontSize: '1rem',
                fontWeight: 600,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {ctaText}
            </a>
            <a
              href="#contact"
              style={{
                display: 'inline-block',
                padding: '18px 36px',
                backgroundColor: 'transparent',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '10px',
                fontSize: '1rem',
                fontWeight: 600,
                border: '2px solid #ffffff',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              Speak with Our Team
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: '64px 32px 32px',
          backgroundColor: '#000000',
          color: '#ffffff',
          borderTop: '1px solid #333',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '48px',
              marginBottom: '48px',
            }}
          >
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
                {companyName}
              </div>
              <p style={{ fontSize: '0.875rem', color: '#999', margin: 0 }}>
                Decision Engine for Businesses
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase' }}>
                Product
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Connect', 'Clean', 'Transform', 'Analyze', 'Report'].map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{ fontSize: '0.875rem', color: '#999', textDecoration: 'none' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#999';
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase' }}>
                Solutions
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Sales', 'Marketing', 'Operations', 'Finance'].map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{ fontSize: '0.875rem', color: '#999', textDecoration: 'none' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#999';
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase' }}>
                Company
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['About', 'Contact', 'Blog', 'Careers'].map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{ fontSize: '0.875rem', color: '#999', textDecoration: 'none' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#999';
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              paddingTop: '32px',
              borderTop: '1px solid #333',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <p style={{ fontSize: '0.875rem', color: '#999', margin: 0 }}>
              © {new Date().getFullYear()} {companyName}. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '24px' }}>
              {['LinkedIn', 'Twitter', 'Facebook'].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  style={{ fontSize: '0.875rem', color: '#999', textDecoration: 'none' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#999';
                  }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
