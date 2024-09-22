import { successResponse, badRequestResponse } from "../utils/utility.js";

const data = {
  claim: [
    {
      title: "Unpaid Invoice",
      complainant: "Acme Consulting LLC",
      description: `
        ile ilgi (a) kurul kararına istinaden Cankurtaran Mah. 58 ada, 1
            parselin (a) (b) olarak ifraz edilmesi, için 15.09.2021 tarih ve 852
            sayılı ilgi (c) Encümen Kararı alınmıştı. Ancak ilgi (d) kayıtlı
            İstanbul Vakıflar 1. Bölge Müdürlüğü yazısı

        `,
      name: "John Doe",
      type: "claim",
      claimId: "claim-01",
      assignedObjection: ["objection-01", "objection-02"],
      evidence: [
        {
          title: "Invoice #12345",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/invoice12345.pdf",
          evidenceId: "evidence-01",
        },
        {
          title: "Contract",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/contract_acmeconsulting.pdf",
          evidenceId: "evidence-02",
        },
        {
          title: "Email Communication",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/email_thread.eml",
          evidenceId: "evidence-03",
        },
      ],
    },
    {
      title: "Unpaid Invoice",
      complainant: "Acme Consulting LLC",
      description:
        "Client has not paid for services rendered as per contract dated 12/09/2024",
      name: "John Doe",
      type: "request",
      claimId: "claim-02",
      assignedObjection: ["objection-03"],

      evidence: [
        {
          title: "Invoice #12345",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/invoice12345.pdf",
          evidenceId: "evidence-0",
        },
        {
          title: "Contract",
          description: "Signed contract outlining payment terms",
          link: "https://example.com/contract_acmeconsulting.pdf",
          evidenceId: "evidence-1",
        },
        {
          title: "Email Communication",
          description: "Email thread showing payment reminders",
          link: "https://example.com/email_thread.eml",
          evidenceId: "evidence-2",
        },
      ],
    },

    {
      title: "Unpaid Invoice",
      complainant: "Acme Consulting LLC",
      description:
        "Client has not paid for services rendered as per contract dated 12/09/2024",
      name: "John Doe",
      type: "claim",
      claimId: "claim-03",
      assignedObjection: ["objection-04"],

      evidence: [
        {
          title: "Invoice #12345",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/invoice12345.pdf",
          evidenceId: "evidence-04",
        },
      ],
    },
    {
      title: "Insulted Invoice",
      complainant: "Acme Consulting LLC",
      description:
        "Client has insulted for asking the services money rendered as per contract dated 12/09/2024",
      name: "John Doe",
      type: "claim",
      claimId: "claim-04",
      assignedObjection: ["objection-04"],

      evidence: [
        {
          title: "Invoice #12345",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/invoice12345.pdf",
          evidenceId: "evidence-05",
        },
      ],
    },
    {
      title: "Insulted Invoice",
      complainant: "Acme Consulting LLC",
      description:
        "Client has insulted for asking the services money rendered as per contract dated 12/09/2024",
      name: "John Doe",
      type: "request",
      claimId: "claim-04",
      assignedObjection: ["objection-04"],

      evidence: [
        {
          title: "Invoice #12345",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/invoice12345.pdf",
          evidenceId: "evidence-06",
        },
        {
          title: "Invoice #12345",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/invoice12345.pdf",
          evidenceId: "evidence-07",
        },
      ],
    },

    {
      title: "Insulted Invoice",
      complainant: "Acme Consulting LLC",
      description:
        "Client has insulted for asking the services money rendered as per contract dated 12/09/2024",
      name: "John Doe",
      type: "request",
      claimId: "claim-05",
      assignedObjection: [],

      evidence: [],
    },
  ],
  objection: [
    {
      title: "Dispute of Unpaid Invoice",
      description: "Services were not rendered as specified in the contract",
      respondent: "Acme Consulting LLC",
      contactPerson: "John Doe",
      type: "objective",
      claimId: "claim-01",
      ojbectionId: "objection-01",

      counterClaim: [
        {
          title: "Service Quality Report",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/quality_report.pdf",
          counterId: "counter-claim-0",
        },
        {
          title: "Communication Log",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerinde yönetmelerini Muhakemat platformu, Ün maların davaları süreçlerind yönetmelerini Muhakemat.",
          link: "https://example.com/communication_log.docx",
          counterId: "counter-claim-1",
        },
      ],
    },
    {
      title: "Dispute of Unpaid Invoice",
      description: "Services were not rendered as specified in the contract",
      respondent: "Acme Consulting LLC",
      contactPerson: "John Doe",
      type: "objective",
      claimId: "claim-01",
      ojbectionId: "objection-02",

      counterClaim: [
        {
          title: "Service Quality Report",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/quality_report.pdf",
          counterId: "counter-claim-01",
        },
        {
          title: "Communication Log",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerinde yönetmelerini Muhakemat platformu, Ün maların davaları süreçlerind yönetmelerini Muhakemat.",
          link: "https://example.com/communication_log.docx",
          counterId: "counter-claim-02",
        },
      ],
    },
    {
      title: "Not valid for payment",
      description: "Services were not rendered as specified in the contract",
      respondent: "Acme Consulting LLC",
      contactPerson: "John Doe",
      type: "objective",
      claimId: "claim-02",
      ojbectionId: "objection-03",

      counterClaim: [
        {
          title: "Service Quality Report",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/quality_report.pdf",
          counterId: "counter-claim-04",
        },
        {
          title: "Communication Log",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerinde yönetmelerini Muhakemat platformu, Ün maların davaları süreçlerind yönetmelerini Muhakemat.",
          link: "https://example.com/communication_log.docx",
          counterId: "counter-claim-06",
        },
      ],
    },
    {
      title: "Lied about thier services",
      description: "Services were not rendered as specified in the contract",
      respondent: "Acme Consulting LLC",
      contactPerson: "John Doe",
      type: "objective",
      claimId: "claim-03",
      ojbectionId: "objection-04",

      counterClaim: [
        {
          title: "Service Quality Report",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/quality_report.pdf",
          counterId: "counter-claim-07",
        },
        {
          title: "Communication Log",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerinde yönetmelerini Muhakemat platformu, Ün maların davaları süreçlerind yönetmelerini Muhakemat.",
          link: "https://example.com/communication_log.docx",
          counterId: "counter-claim-08",
        },
      ],
    },
  ],
};
export const getClaimJsonData = (req, res) => {
  try {
    return successResponse(res, data);
  } catch (e) {
    return badRequestResponse(res, error);
  }
};
