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
      assignedObjection: [],

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
        {
          title: "Contract Clause",
          description:
            "Highlighted contract clause regarding service quality guarantees",
          link: "https://example.com/contract_clause.png",
          counterId: "counter-claim-03",
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
