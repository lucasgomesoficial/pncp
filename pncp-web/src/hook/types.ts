export interface PurchaseList {
  modalidadeId: number;
  srp: boolean;
  anoCompra: number;
  unidadeOrgao: {
    ufNome: string;
    codigoUnidade: string;
    nomeUnidade: string;
    ufSigla: string;
    municipioNome: string;
    codigoIbge: string;
  };
  dataInclusao: string; // ISO 8601 date string
  dataPublicacaoPncp: string; // ISO 8601 date string
  dataAtualizacao: string; // ISO 8601 date string
  sequencialCompra: number;
  orgaoEntidade: {
    cnpj: string;
    esferaId: string;
    poderId: string;
    razaoSocial: string;
  };
  numeroCompra: string;
  amparoLegal: {
    codigo: number;
    descricao: string;
    nome: string;
  };
  dataAberturaProposta: string; // ISO 8601 date string
  dataEncerramentoProposta: string; // ISO 8601 date string
  informacaoComplementar: string;
  processo: string;
  objetoCompra: string;
  linkSistemaOrigem: string;
  valorTotalHomologado: number;
  modoDisputaId: number;
  numeroControlePNCP: string;
  situacaoCompraId: number;
  situacaoCompraNome: string;
  tipoInstrumentoConvocatorioCodigo: number;
  tipoInstrumentoConvocatorioNome: string;
  usuarioNome: string;
  valorTotalEstimado: number;
  modalidadeNome: string;
  modoDisputaNome: string;
}

export interface PurchaseItems {
  numeroItem: number;
  descricao: string;
  materialOuServico: string;
  materialOuServicoNome: string;
  valorUnitarioEstimado: number;
  valorTotal: number;
  quantidade: number;
  unidadeMedida: string;
  orcamentoSigiloso: boolean;
  itemCategoriaId: number;
  itemCategoriaNome: string;
  criterioJulgamentoId: number;
  criterioJulgamentoNome: string;
  situacaoCompraItem: number;
  situacaoCompraItemNome: string;
  tipoBeneficio: number;
  tipoBeneficioNome: string;
  incentivoProdutivoBasico: boolean;
  dataInclusao: string; // ISO 8601 date string
  dataAtualizacao: string; // ISO 8601 date string
  temResultado: boolean;
  imagem: number;
}

export type ItemsTypes = {
  name: string;
  quantity: number;
  valueUnit: number;
  valueTotal: number;
};
