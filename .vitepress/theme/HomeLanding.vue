<template>
  <section class="figma-landing" aria-labelledby="site-hero-title">
    <section class="figma-hero">
      <div class="figma-theme-toggle-zone">
        <button
          class="figma-theme-toggle"
          type="button"
          :aria-label="isDark ? '切换浅色模式' : '切换深色模式'"
          :title="isDark ? '切换浅色' : '切换深色'"
          @click="toggleTheme"
        >
          <span
            class="figma-theme-toggle__icon"
            :class="isDark ? 'figma-theme-toggle__icon--sun' : 'figma-theme-toggle__icon--moon'"
            aria-hidden="true"
          ></span>
        </button>
      </div>
      <div class="figma-wrap figma-hero__inner">
        <div class="figma-intro">
          <p class="figma-label">{{ hero.eyebrow }}</p>
          <h1 id="site-hero-title">{{ hero.title }}</h1>
          <p class="figma-copy">{{ hero.tagline }}</p>
          <div class="figma-actions" aria-label="首页首屏操作">
            <a
              v-for="action in hero.actions"
              :key="action.text"
              class="figma-button"
              :class="`figma-button--${action.theme}`"
              :href="action.link"
            >
              {{ action.text }}
            </a>
          </div>
        </div>

        <div class="figma-hero__visual" aria-label="智行租赁产品图标">
          <div class="figma-hero__glow" aria-hidden="true"></div>
          <img src="/favicon.ico" alt="智行租赁" />
        </div>
      </div>
    </section>

    <section class="figma-section figma-section--soft">
      <div class="figma-wrap figma-split">
        <div class="figma-intro">
          <p class="figma-label">租赁业务运营中枢</p>
          <h2>管好车辆、订单、资金和风险</h2>
          <p class="figma-copy">
            从签约收款、验车交付到续租换车、退车结算，关键动作都有状态、凭证和负责人，减少漏单和跨岗位反复确认。
          </p>
          <div class="figma-actions" aria-label="首页落地页操作">
            <a class="figma-button figma-button--primary" href="/overview/what-features">查看功能</a>
            <a class="figma-button figma-button--secondary" href="/overview/featured-functions">特色能力</a>
            <a class="figma-button figma-button--secondary" href="/overview/version-introduction">版本方案</a>
            <a class="figma-button figma-button--magenta" :href="demoUrl" target="_blank" rel="noreferrer">进入演示</a>
          </div>
          <div class="figma-tags" aria-label="核心能力">
            <span v-for="tag in dashboard.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>

        <div class="figma-product" aria-label="智行租赁运营看板示意">
          <div class="figma-product__top">
            <i aria-hidden="true"></i>
            <span>Dashboard</span>
            <b>console.le2.fun</b>
            <strong>智行租赁</strong>
          </div>
          <div class="figma-product__body">
            <nav class="figma-product__nav" aria-label="示意导航">
              <span v-for="item in dashboard.nav" :key="item">{{ item }}</span>
            </nav>
            <main class="figma-product__main">
              <div class="figma-product__toolbar">
                <div>
                  <span class="figma-label">订单工作台</span>
                  <strong>今日运营概览</strong>
                </div>
                <em>在线协同</em>
              </div>
              <div class="figma-product__metrics" aria-label="运营指标">
                <article v-for="item in dashboard.metrics" :key="item.title">
                  <span>{{ item.label }}</span>
                  <strong>{{ item.title }}</strong>
                  <em>{{ item.text }}</em>
                </article>
              </div>
              <div class="figma-product__workspace">
                <section class="figma-product__table" aria-label="订单列表">
                  <div class="figma-product__table-head">
                    <span>订单</span>
                    <span>节点</span>
                    <span>状态</span>
                  </div>
                  <div v-for="item in dashboard.orders" :key="item.name" class="figma-product__row">
                    <strong>{{ item.name }}</strong>
                    <span>{{ item.stage }}</span>
                    <em>{{ item.status }}</em>
                  </div>
                </section>
                <aside class="figma-product__tasks" aria-label="待办摘要">
                  <div v-for="item in dashboard.tasks" :key="item.label">
                    <span class="figma-label">{{ item.label }}</span>
                    <strong>{{ item.title }}</strong>
                    <p>{{ item.text }}</p>
                  </div>
                </aside>
              </div>
              <div class="figma-product__activity" aria-label="最近状态回写">
                <span class="figma-label">状态回写</span>
                <p v-for="item in dashboard.activity" :key="item">{{ item }}</p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>

    <section class="figma-section figma-section--soft">
      <div class="figma-wrap">
        <div class="figma-section__head">
          <div>
            <p class="figma-label">经营结果</p>
            <h3>减少漏单，风险早发现</h3>
          </div>
          <p class="figma-copy">
            租前准备、租中跟踪和租后结算都在同一套数据里，异常有提醒、过程有记录、责任可追溯。
          </p>
        </div>
        <div class="figma-grid figma-grid--4">
          <article v-for="item in outcomes.items" :key="item.title" class="figma-card figma-card--numbered">
            <span class="figma-card__index">{{ item.index }}</span>
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
          </article>
        </div>
        <div class="figma-grid figma-grid--3 figma-grid--mt" aria-label="经营闭环补充内容">
          <article v-for="item in outcomes.details" :key="item.title" class="figma-card">
            <span class="figma-label">{{ item.label }}</span>
            <strong>{{ item.title }}</strong>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="figma-section figma-section--soft" aria-labelledby="workflow-title">
      <div class="figma-wrap">
        <div class="figma-section__head">
          <div>
            <p class="figma-label">业务流程</p>
            <h3 id="workflow-title">节点接力，责任清楚</h3>
          </div>
          <p class="figma-copy">建档、签约、出车、跟踪、续租和结算都回到订单，用系统状态替代口头催办。</p>
        </div>

        <ol class="figma-grid figma-grid--6 figma-workflow">
          <li v-for="(step, index) in workflow.steps" :key="step.title" class="figma-card figma-card--numbered">
            <span class="figma-card__index">{{ String(index + 1).padStart(2, '0') }}</span>
            <strong>{{ step.title }}</strong>
            <p>{{ step.text }}</p>
          </li>
        </ol>

        <div class="figma-grid figma-grid--3 figma-grid--mt" aria-label="流程补充信息">
          <article v-for="item in workflow.meta" :key="item.title" class="figma-card">
            <span class="figma-label">{{ item.label }}</span>
            <strong>{{ item.title }}</strong>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="figma-section figma-section--soft" aria-labelledby="capability-title">
      <div class="figma-wrap">
        <div class="figma-section__head">
          <div>
            <p class="figma-label">能力矩阵</p>
            <h3 id="capability-title">日常能力，集中复用</h3>
          </div>
          <p class="figma-copy">车辆、订单、合同、违章、财务、权限和图片证据链不再分散在多个表格和群聊里。</p>
        </div>
        <div class="figma-grid figma-grid--4 figma-grid--capability">
          <article v-for="item in capabilityMatrix.items" :key="item.title" class="figma-card">
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
            <div class="figma-tags">
              <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="figma-section figma-section--soft" aria-labelledby="roles-title">
      <div class="figma-wrap">
        <div class="figma-section__head">
          <div>
            <p class="figma-label">角色价值</p>
            <h3 id="roles-title">各岗位看该做的事</h3>
          </div>
          <p class="figma-copy">管理层看经营健康度，运营看交付进度，财务看资金状态，车管看车辆风险，数据口径保持一致。</p>
        </div>

        <div class="figma-grid figma-grid--4" aria-label="角色工作台摘要">
          <article v-for="item in roles.board" :key="item.title" class="figma-card">
            <span class="figma-label">{{ item.label }}</span>
            <strong>{{ item.title }}</strong>
          </article>
        </div>

        <div class="figma-grid figma-grid--3 figma-grid--mt">
          <article v-for="role in roles.items" :key="role.name" class="figma-card">
            <span class="figma-label">{{ role.metric }}</span>
            <h4>{{ role.name }}</h4>
            <p>{{ role.value }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="figma-section figma-section--soft" aria-labelledby="plans-title">
      <div class="figma-wrap">
        <div class="figma-section__head">
          <div>
            <p class="figma-label">版本与下一步</p>
            <h3 id="plans-title">按规模选版本</h3>
          </div>
          <p class="figma-copy">管理端网页、小程序和租客端都包含在方案内，功能全部开放，不按模块拆售。</p>
        </div>

        <div class="figma-grid figma-grid--3">
          <article v-for="plan in plans.items" :key="plan.name" class="figma-card">
            <span class="figma-label">{{ plan.fit }}</span>
            <h4>{{ plan.name }}</h4>
            <strong>{{ plan.price }}</strong>
            <p>{{ plan.text }}</p>
          </article>
        </div>

        <div class="figma-next">
          <div>
            <p class="figma-copy">{{ plans.next.copy }}</p>
          </div>
          <div class="figma-grid figma-grid--3">
            <article class="figma-card figma-card--contact">
              <div>
                <span class="figma-label">{{ plans.next.contact.label }}</span>
                <p>{{ plans.next.contact.text }}</p>
              </div>
              <img src="/images/wechat-contact.png" alt="智行租赁微信联系方式二维码" />
            </article>
            <article class="figma-card">
              <span class="figma-label">{{ plans.next.evaluate.label }}</span>
              <p>{{ plans.next.evaluate.text }}</p>
              <a class="figma-button figma-button--primary" :href="plans.next.evaluate.link">{{ plans.next.evaluate.action }}</a>
            </article>
            <article class="figma-card">
              <span class="figma-label">{{ plans.next.demo.label }}</span>
              <p>{{ plans.next.demo.text }}</p>
              <a class="figma-button figma-button--magenta" :href="plans.next.demo.link" target="_blank" rel="noreferrer">{{ plans.next.demo.action }}</a>
            </article>
          </div>
        </div>
      </div>
    </section>

    <footer class="figma-footer">
      <div v-if="footer?.links?.length">
        <a
          v-for="link in footer.links"
          :key="link.href"
          :href="link.href"
          :target="link.target"
          :rel="link.rel"
        >
          {{ link.text }}
        </a>
      </div>
      <p v-if="footer?.copyright">{{ footer.copyright }}</p>
    </footer>
  </section>
</template>

<script setup>
import { useData } from 'vitepress'

const demoUrl = import.meta.env.VITE_DEMO_URL
const { isDark, theme } = useData()
const footer = theme.value.footer

const hero = {
  eyebrow: '智行租赁',
  title: '懂业务的租赁运营中枢',
  tagline: '把车辆、司机、订单、财务、风控和消息协同放到同一套工作台里，减少人工同步，管好车辆、资金与风险。',
  actions: [
    { theme: 'secondary', text: '功能一览', link: '/overview/what-features' },
    { theme: 'primary', text: '特色功能', link: '/overview/featured-functions' },
    { theme: 'secondary', text: '版本介绍', link: '/overview/version-introduction' }
  ]
}

const toggleTheme = () => {
  isDark.value = !isDark.value
}

const dashboard = {
  tags: ['车辆资产', '租赁订单', '财务收付', '风控留痕', '合同单据', '企业微信通知', '租客端小程序', '独立部署'],
  nav: ['首页', '订单', '车辆', '财务', '风控'],
  metrics: [
    { label: '在租车辆', title: '128', text: '+12%' },
    { label: '待处理订单', title: '36', text: '今日' },
    { label: '风险提醒', title: '09', text: '需跟进' }
  ],
  orders: [
    { name: '川A782', stage: '待出车', status: '验车' },
    { name: '川A921', stage: '用车中', status: '跟踪' },
    { name: '川A816', stage: '退车', status: '结算' },
    { name: '川A530', stage: '续租', status: '待确认' }
  ],
  tasks: [
    { label: '风险待办', title: '09 项', text: '年检 / 保险 / 违章' },
    { label: '财务摘要', title: '收支可核', text: '租金 / 押金 / 退款' },
    { label: '消息触达', title: '自动提醒', text: '推送给责任人' }
  ],
  activity: [
    '退车结算回写订单',
    '证照提醒已发送',
    '押金退款待复核'
  ]
}

const outcomes = {
  items: [
    { index: '01', title: '在线流转', text: '签约、验车、续租、退车按节点推进。' },
    { index: '02', title: '回到订单', text: '违章、维修、保养、收付款都能追溯。' },
    { index: '03', title: '风险早提醒', text: '年检、保险、证照、欠租和违章集中暴露。' },
    { index: '04', title: '收支可核', text: '应收、实收、押金、退款和凭证统一对账。' }
  ],
  details: [
    { label: '数据口径', title: '数据口径统一', text: '车辆、订单、财务、风控都回到同一套数据。' },
    { label: '责任定位', title: '异常责任清楚', text: '逾期、欠租、违章、证照到期能定位责任人。' },
    { label: '动作留痕', title: '管理动作可追踪', text: '提醒、处理、复核和结算形成记录。' }
  ]
}

const workflow = {
  steps: [
    { title: '建档', text: '车辆、司机、客户与租赁资料统一归档。' },
    { title: '签约', text: '合同、证件、费用规则和收款计划进入订单。' },
    { title: '出车', text: '完成发车验车，图片和交付状态完整留痕。' },
    { title: '用车跟踪', text: '违章、年检、维修、保养、保险同步跟进。' },
    { title: '续租 / 换车', text: '变更记录关联原订单，责任关系不断档。' },
    { title: '退车结算', text: '退车验车、结算审核、押金退款统一归档。' }
  ],
  meta: [
    { label: '参与角色', title: '销售 / 财务 / 车管', text: '每个节点明确负责人，交接状态跟随订单变化。' },
    { label: '业务产出', title: '订单、验车、收款留痕', text: '合同、图片、费用、违章都能追溯到具体订单。' },
    { label: '系统价值', title: '减少重复确认', text: '用系统状态替代线下催办，让异常事项更早暴露。' }
  ]
}

const capabilityMatrix = {
  items: [
    { title: '车辆全生命周期', text: '从建档、证件档案、保险、年检到维修保养，形成完整车辆资产台账。', tags: ['资产台账', '年检保险', '维修保养'] },
    { title: '租赁订单闭环', text: '签约、出车、换车、续租、退车、结算和财务流水围绕订单流转。', tags: ['订单流转', '换车续租', '退车结算'] },
    { title: '证件与合同自动化', text: '证件 OCR、合同模板、结算单和收据自动生成，减少重复录入。', tags: ['证件识别', '合同模板', '单据生成'] },
    { title: '违章年检联动', text: '对接交管 122，定时同步车辆违章与年检结果，并关联订单和司机。', tags: ['交管 122', '自动同步', '司机匹配'] },
    { title: '财务与押金管理', text: '统一管理租金、押金、退款、收付款流水、收据和结算凭证。', tags: ['收付款', '押金', '结算'] },
    { title: '风控与消息提醒', text: '年检、保险、证照、欠租和合同到期集中提醒，并通过企业微信触达。', tags: ['风险一览', '企业微信', '提前提醒'] },
    { title: '权限与操作留痕', text: '按角色控制菜单、按钮和接口权限，关键业务动作可追溯、可审计。', tags: ['角色权限', '按钮控制', '操作审计'] },
    { title: '图片证据链', text: '验车、维修、保养和出险支持图片留痕，可回溯到车辆和订单。', tags: ['图片留痕', '证据链', '自动清理'] }
  ]
}

const roles = {
  board: [
    { label: '今日待办', title: '待签约 / 待收款 / 待退车' },
    { label: '风险事项', title: '年检 / 保险 / 违章 / 证照' },
    { label: '资金跟进', title: '押金 / 租金 / 退款 / 收据' },
    { label: '消息触达', title: '合同 / 收付款 / 年检 / 续保' }
  ],
  items: [
    { name: '老板 / 管理层', metric: '经营视图', value: '一屏掌握车辆利用、订单进度、资金状态和风险事项。' },
    { name: '门店运营', metric: '交付任务', value: '按预订、签约、租车、退车、换车、续租处理日常交付。' },
    { name: '销售人员', metric: '订单状态', value: '持续跟进待签约、已签约、待交付、待续租和待结算客户。' },
    { name: '财务人员', metric: '资金状态', value: '集中处理押金、租金、退款、收据、付款计划与结算凭证。' },
    { name: '车管人员', metric: '车辆风险', value: '跟进年检、保险、维修、保养、出险、违章和验车留痕。' },
    { name: '外部协作方', metric: '授权协同', value: '修理厂、保险协作方按授权查看维修、事故、报价和处理进度。' }
  ]
}

const plans = {
  items: [
    { name: '轻量版', fit: '50 台以内', price: '¥1,300 / 年', text: '覆盖基础运营所需能力。' },
    { name: '标准版', fit: '400 台以内', price: '¥5,200 / 年', text: '满足多组织协同与精细管理。' },
    { name: '旗舰版', fit: '400 台以上', price: '¥10 / 台车 / 年', text: '支持更高并发与复杂流程。' }
  ],
  next: {
    copy: '理性评估先看功能，想快速感受产品就进演示，也可以扫码咨询演示账号。',
    contact: {
      label: '微信咨询',
      text: '扫码领演示账号，咨询价格。'
    },
    evaluate: {
      label: '理性评估',
      text: '先确认车辆、订单、财务、风控和租客端能力是否覆盖当前业务。',
      action: '先看功能',
      link: '/overview/what-features'
    },
    demo: {
      label: '体验产品',
      text: '直接进入演示站点，按签约、出车、退车结算体验管理端流程。',
      action: '进入演示',
      link: demoUrl
    }
  }
}
</script>

<style scoped lang="scss">
$light-vars: (
  "canvas": #ffffff, "ink": #000000, "muted": rgba(0, 0, 0, 0.62), "soft": #f7f7f5,
  "card": #ffffff, "hairline": #e6e6e6, "hairline-strong": rgba(0, 0, 0, 0.18), "primary": #000000,
  "on-primary": #ffffff, "secondary": #ffffff, "on-secondary": #000000, "magenta": #ff3d8b, "on-magenta": #ffffff,
  "panel-card": rgba(255, 255, 255, 0.34),
  "card-hover": #fbfbfa, "soft-hover": #efefec, "panel-card-hover": rgba(255, 255, 255, 0.46),
  "hairline-stronger": rgba(0, 0, 0, 0.26), "primary-hover": #161616, "secondary-hover": #f2f2ef, "magenta-hover": #ff5a9d
);

$dark-vars: (
  "canvas": #050505, "ink": #f7f7f5, "muted": rgba(247, 247, 245, 0.68), "soft": #111111,
  "card": #0d0d0d, "hairline": rgba(255, 255, 255, 0.14), "hairline-strong": rgba(255, 255, 255, 0.24), "primary": #ffffff,
  "on-primary": #000000, "secondary": #050505, "on-secondary": #ffffff, "magenta": #ff3d8b, "on-magenta": #ffffff,
  "panel-card": rgba(255, 255, 255, 0.07),
  "card-hover": #141414, "soft-hover": #171717, "panel-card-hover": rgba(255, 255, 255, 0.1),
  "hairline-stronger": rgba(255, 255, 255, 0.34), "primary-hover": #ecece8, "secondary-hover": #111111, "magenta-hover": #ff5a9d
);

$bp-mobile: 768px;

@mixin emit-vars($vars) {
  @each $name, $value in $vars {
    --fl-#{$name}: #{$value};
  }
}

@mixin card($padding: 20px, $border: var(--fl-hairline-strong)) {
  border: 1px solid $border;
  border-radius: 24px;
  padding: $padding;
}

@mixin label {
  display: block;
  font-family: var(--fl-mono);
  font-size: 12px;
  letter-spacing: 0.6px;
  line-height: 1;
  opacity: 0.72;
  text-transform: uppercase;
}

@mixin copy($size: 17px) {
  margin-top: 10px;
  color: currentColor;
  font-size: $size;
  font-weight: 320;
  line-height: 1.4;
  opacity: 0.72;
}

:global(:root) {
  @include emit-vars($light-vars);
}

:global(html.dark) {
  @include emit-vars($dark-vars);
}

.figma-landing {
  --fl-font: figmaSans, "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --fl-mono: figmaMono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  color: var(--fl-ink);
  background: var(--fl-canvas);
  font-family: var(--fl-font);

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }
}

:global(.Layout:has(.VPContent.is-home) > .VPNav) {
  display: none !important;
}

.figma-wrap {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.figma-hero {
  position: relative;
  display: flex;
  min-height: 100vh;
  align-items: center;
  background: var(--fl-canvas);

  &__inner {
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.72fr);
    gap: 56px;
    align-items: center;
  }

  h1 {
    max-width: 780px;
    font-size: 86px;
    font-weight: 340;
    line-height: 1;
  }

  &__visual {
    position: relative;
    display: grid;
    width: clamp(260px, 29vw, 360px);
    aspect-ratio: 1;
    place-items: center;
    justify-self: end;

    img {
      position: relative;
      z-index: 1;
      width: 72%;
      height: 72%;
      object-fit: contain;
    }
  }

  &__glow {
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
    filter: blur(68px);
    opacity: 0.9;
  }
}

.figma-theme-toggle-zone {
  position: absolute;
  top: 20px;
  right: max(12px, calc((100vw - 1180px) / 2 - 12px));
  z-index: 10;
  display: grid;
  width: 72px;
  height: 72px;
  place-items: center;
}

.figma-theme-toggle {
  position: relative;
  z-index: 10;
  display: grid;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--fl-hairline);
  border-radius: 9999px;
  background: var(--fl-card);
  color: var(--fl-ink);
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-4px);
  transition:
    opacity 160ms ease,
    border-color 160ms ease,
    background-color 160ms ease,
    transform 160ms ease;

  &:hover,
  &:focus-visible {
    border-color: var(--fl-hairline-strong);
    background: var(--fl-soft);
  }

  &:active {
    transform: scale(0.96);
  }

  &__icon {
    position: relative;
    display: block;
    width: 16px;
    height: 16px;

    &::before,
    &::after {
      position: absolute;
      content: "";
    }

    &--moon {
      &::before {
        inset: 1px;
        border-radius: 9999px;
        background: currentColor;
      }

      &::after {
        top: -1px;
        right: -1px;
        width: 12px;
        height: 12px;
        border-radius: 9999px;
        background: var(--fl-card);
      }
    }

    &--sun {
      &::before {
        inset: 4px;
        border-radius: 9999px;
        background: currentColor;
      }

      &::after {
        inset: 0;
        border-radius: 9999px;
        background:
          linear-gradient(currentColor, currentColor) center top / 1.5px 4px no-repeat,
          linear-gradient(currentColor, currentColor) center bottom / 1.5px 4px no-repeat,
          linear-gradient(currentColor, currentColor) left center / 4px 1.5px no-repeat,
          linear-gradient(currentColor, currentColor) right center / 4px 1.5px no-repeat,
          linear-gradient(currentColor, currentColor) 2px 2px / 1.5px 3px no-repeat,
          linear-gradient(currentColor, currentColor) calc(100% - 2px) 2px / 1.5px 3px no-repeat,
          linear-gradient(currentColor, currentColor) 2px calc(100% - 2px) / 1.5px 3px no-repeat,
          linear-gradient(currentColor, currentColor) calc(100% - 2px) calc(100% - 2px) / 1.5px 3px no-repeat;
      }
    }
  }
}

.figma-theme-toggle-zone:hover .figma-theme-toggle,
.figma-theme-toggle-zone:focus-within .figma-theme-toggle,
.figma-theme-toggle:focus-visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.figma-section {
  padding: 80px 0;
  background: var(--fl-canvas);
  color: var(--fl-panel-fg, var(--fl-ink));

  > .figma-wrap {
    @include card(40px, transparent);
    background: var(--fl-panel-bg, var(--fl-soft));
  }

  &--soft {
    --fl-panel-bg: var(--fl-soft);
    --fl-panel-fg: var(--fl-ink);
  }

  h2,
  h3 {
    font-size: 48px;
    font-weight: 340;
    line-height: 1.05;
  }

  &__head,
  .figma-split {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 0.8fr);
    gap: 40px;
    align-items: start;
  }

  &__head {
    margin-bottom: 32px;
  }
}

.figma-grid {
  display: grid;
  gap: 12px;

  &--3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  &--4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  &--6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  &--mt {
    margin-top: 12px;
  }
}

.figma-card {
  @include card;
  min-width: 0;
  background: var(--fl-panel-card);
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    transform 160ms ease;

  h4,
  strong {
    display: block;
    margin-top: 16px;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.35;
  }

  p {
    @include copy;
  }

  &--contact {
    display: grid;
    grid-template-columns: 1fr 96px;
    gap: 16px;
    align-items: center;

    img {
      width: 96px;
      height: 96px;
      border: 1px solid var(--fl-hairline);
      border-radius: 8px;
      background: #ffffff;
      object-fit: contain;
    }
  }

  &--numbered {
    position: relative;
    overflow: hidden;
    min-height: 208px;

    > *:not(.figma-card__index) {
      position: relative;
      z-index: 1;
    }

    h4,
    strong {
      margin-top: 74px;
    }
  }

  &__index {
    position: absolute;
    top: 18px;
    left: 22px;
    width: calc(100% - 44px);
    font-family: var(--fl-mono);
    font-size: clamp(54px, 5vw, 80px);
    letter-spacing: -3px;
    line-height: 0.85;
    opacity: 0.1;
    pointer-events: none;
  }
}

.figma-label {
  @include label;
}

.figma-copy {
  @include copy(18px);
  max-width: 780px;
}

.figma-intro {
  display: grid;
  align-content: start;
  gap: 14px;

  .figma-copy,
  .figma-actions,
  .figma-tags {
    margin-top: 0;
  }
}

.figma-actions,
.figma-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.figma-button,
.figma-tags span {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  text-decoration: none;
}

.figma-button {
  min-height: 44px;
  justify-content: center;
  border: 1px solid transparent;
  padding: 9px 18px;
  font-size: 18px;
  font-weight: 480;
  line-height: 1.4;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    color 160ms ease,
    transform 160ms ease;

  &--primary {
    background: var(--fl-primary);
    color: var(--fl-on-primary);
  }

  &--secondary {
    border-color: var(--fl-hairline-strong);
    background: var(--fl-secondary);
    color: var(--fl-on-secondary);
  }

  &--magenta {
    background: var(--fl-magenta);
    color: var(--fl-on-magenta);
  }
}

.figma-tags span {
  border: 1px solid var(--fl-hairline-strong);
  padding: 5px 10px;
  background: transparent;
  color: currentColor;
  font-size: 13px;
  font-weight: 480;
  line-height: 1.3;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    color 160ms ease,
    transform 160ms ease;
}

.figma-product {
  overflow: hidden;
  border: 1px solid var(--fl-hairline);
  border-radius: 24px;
  background: var(--fl-card);
  color: var(--fl-ink);
  transition:
    border-color 160ms ease,
    background-color 160ms ease;

  &__top {
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    gap: 12px;
    align-items: center;
    min-height: 52px;
    padding: 0 16px;
    border-bottom: 1px solid var(--fl-hairline);

    i {
      width: 34px;
      height: 10px;
      border-radius: 9999px;
      background:
        radial-gradient(circle at 5px 50%, var(--fl-muted) 0 3px, transparent 3.5px),
        radial-gradient(circle at 17px 50%, var(--fl-muted) 0 3px, transparent 3.5px),
        radial-gradient(circle at 29px 50%, var(--fl-muted) 0 3px, transparent 3.5px);
      opacity: 0.6;
    }

    b {
      justify-self: center;
      border: 1px solid var(--fl-hairline);
      border-radius: 9999px;
      padding: 5px 14px;
      color: var(--fl-muted);
      font-size: 12px;
      font-weight: 400;
      line-height: 1;
    }
  }

  &__body {
    display: grid;
    grid-template-columns: 96px minmax(0, 1fr);
    min-height: 438px;
  }

  &__nav {
    display: grid;
    align-content: start;
    gap: 8px;
    padding: 16px 12px;
    border-right: 1px solid var(--fl-hairline);
    background: color-mix(in srgb, var(--fl-soft), transparent 20%);

    span {
      border-radius: 9999px;
      padding: 8px 10px;
      color: var(--fl-muted);
      font-family: var(--fl-font);
      font-size: 13px;
      font-weight: 480;
      letter-spacing: 0;
      line-height: 1;
      text-transform: none;

      &:first-child {
        background: var(--fl-panel-card);
        color: var(--fl-ink);
      }
    }
  }

  &__main {
    display: grid;
    gap: 12px;
    padding: 16px;
  }

  &__toolbar,
  &__metrics,
  &__workspace,
  &__activity {
    display: grid;
  }

  &__toolbar {
    grid-template-columns: 1fr auto;
    gap: 12px;
    align-items: center;

    strong {
      margin-top: 6px;
      font-size: 20px;
    }
  }

  &__metrics {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;

    article {
      border: 1px solid var(--fl-hairline);
      border-radius: 14px;
      padding: 10px;
      background: var(--fl-panel-card);
    }
  }

  &__workspace {
    grid-template-columns: minmax(0, 1fr) 144px;
    gap: 8px;
    align-items: stretch;
  }

  &__table,
  &__tasks,
  &__activity {
    border: 1px solid var(--fl-hairline);
    border-radius: 16px;
    background: var(--fl-panel-card);
  }

  &__table {
    overflow: hidden;
  }

  &__table-head,
  &__row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 52px 52px;
    gap: 8px;
    align-items: center;
    padding: 10px 12px;
  }

  &__table-head {
    border-bottom: 1px solid var(--fl-hairline);
    color: var(--fl-muted);
    font-family: var(--fl-mono);
    font-size: 11px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  &__row {
    min-height: 38px;

    + .figma-product__row {
      border-top: 1px solid var(--fl-hairline);
    }

    strong,
    span,
    em {
      overflow: hidden;
      margin-top: 0;
      font-family: var(--fl-font);
      font-size: 12px;
      font-weight: 480;
      letter-spacing: 0;
      line-height: 1.2;
      text-overflow: ellipsis;
      text-transform: none;
      white-space: nowrap;
    }
  }

  &__tasks {
    display: grid;
    align-content: start;
    padding: 12px;

    div + div {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid var(--fl-hairline);
    }
  }

  &__activity {
    grid-template-columns: auto repeat(3, minmax(0, 1fr));
    gap: 8px;
    align-items: center;
    padding: 10px 12px;
  }

  span,
  em {
    @include label;
    color: var(--fl-muted);
    font-style: normal;
  }

  strong {
    display: block;
    margin-top: 4px;
    font-size: 18px;
    font-weight: 540;
    line-height: 1.25;
  }

  p {
    margin-top: 4px;
    font-size: 13px;
    line-height: 1.35;
  }

  &__tasks strong {
    font-size: 16px;
  }
}

.figma-workflow {
  margin: 0;
  padding: 0;
  list-style: none;
}

.figma-next {
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
  margin-top: 32px;
  @include card(24px);
  background: var(--fl-panel-card);

  .figma-button {
    width: 100%;
    margin-top: 12px;
  }
}

.figma-footer {
  display: grid;
  gap: 4px;
  padding: 36px 24px 44px;
  border-top: 1px solid var(--fl-hairline);
  background: var(--fl-canvas);
  color: var(--fl-muted);
  font-size: 14px;
  font-weight: 330;
  line-height: 1.7;
  text-align: center;

  a {
    color: currentColor;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
}

.figma-button:focus-visible,
.figma-card:focus-visible,
.figma-product:focus-visible,
.figma-tags span:focus-visible {
  outline: none;
}

@media (min-width: $bp-mobile) {
  .figma-landing {
    height: 100vh;
    overflow-y: auto;
    overscroll-behavior-y: contain;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
  }

  .figma-hero,
  .figma-section {
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }

  .figma-footer {
    scroll-snap-align: end;
  }

  .figma-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .figma-hero__inner {
    grid-template-columns: minmax(0, 0.82fr) minmax(320px, 0.68fr);
  }

  .figma-section .figma-split {
    grid-template-columns: minmax(0, 0.76fr) minmax(500px, 0.84fr);
    align-items: center;
  }

  .figma-product {
    width: min(100%, 720px);
    justify-self: center;
  }

  .figma-hero {
    &__inner {
      gap: 36px;
    }

    h1 {
      max-width: 720px;
      font-size: 56px;
    }

    &__visual {
      width: 320px;
      justify-self: end;
    }
  }

  .figma-copy {
    max-width: 100%;
  }

  .figma-section {
    h2,
    h3 {
      font-size: 42px;
    }

    &__head {
      grid-template-columns: 1fr;
    }
  }

  .figma-grid--4,
  .figma-grid--6 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .figma-workflow {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .figma-grid--capability {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: $bp-mobile) {
  .figma-wrap {
    width: min(100%, calc(100% - 32px));
  }

  .figma-hero h1 {
    font-size: 44px;
  }

  .figma-hero__inner,
  .figma-section .figma-split {
    grid-template-columns: 1fr;
  }

  .figma-hero__visual {
    width: 220px;
    justify-self: center;
  }

  .figma-section {
    padding: 56px 0;

    > .figma-wrap {
      padding: 40px 16px;
    }

    h2,
    h3 {
      font-size: 34px;
    }
  }

  .figma-grid,
  .figma-section .figma-section__head {
    grid-template-columns: 1fr;
  }

  .figma-product__workspace {
    grid-template-columns: 1fr;
  }

  .figma-product {
    &__body {
      grid-template-columns: 1fr;
      gap: 10px;
      padding: 16px;
    }

    &__top {
      grid-template-columns: auto 1fr auto;
      min-height: 54px;
      padding: 0 16px;

      b {
        display: none;
      }
    }

    &__nav {
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 6px;
      border-right: 0;
      border-bottom: 1px solid var(--fl-hairline);
      padding: 10px;

      span {
        padding: 7px 6px;
        text-align: center;
      }
    }

    &__metrics {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 8px;

      article {
        padding: 10px;
      }

      strong {
        font-size: 18px;
      }

      p {
        font-size: 13px;
      }
    }

    &__activity {
      grid-template-columns: 1fr;
    }

    &__table-head,
    &__row {
      grid-template-columns: minmax(0, 1fr) 58px 54px;
    }
  }

  .figma-copy {
    font-size: 16px;
  }

  .figma-card--numbered {
    min-height: 190px;
  }

  .figma-card--contact {
    grid-template-columns: 1fr;
  }
}

@media (hover: none) {
  .figma-theme-toggle-zone {
    top: 20px;
    right: max(12px, calc((100vw - 1180px) / 2 - 12px));
  }

  .figma-theme-toggle {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
}

@media (hover: hover) {
  .figma-theme-toggle:hover,
  .figma-theme-toggle:focus-visible {
    border-color: var(--fl-hairline-stronger);
    background: var(--fl-card-hover);
  }

  .figma-button:hover,
  .figma-button:focus-visible {
    transform: translateY(-1px);
  }

  .figma-button--primary:hover,
  .figma-button--primary:focus-visible {
    background: var(--fl-primary-hover);
  }

  .figma-button--secondary:hover,
  .figma-button--secondary:focus-visible {
    border-color: var(--fl-hairline-stronger);
    background: var(--fl-secondary-hover);
  }

  .figma-button--magenta:hover,
  .figma-button--magenta:focus-visible {
    background: var(--fl-magenta-hover);
  }

  .figma-card:hover,
  .figma-card:focus-within {
    border-color: var(--fl-hairline-stronger);
    background: var(--fl-panel-card-hover);
    transform: translateY(-2px);
  }

  .figma-card--numbered:hover,
  .figma-card--numbered:focus-within,
  .figma-card--contact:hover,
  .figma-card--contact:focus-within,
  .figma-product .figma-card:hover,
  .figma-product .figma-card:focus-within {
    transform: translateY(-1px);
  }

  .figma-product:hover,
  .figma-product:focus-within {
    border-color: var(--fl-hairline-stronger);
    background: var(--fl-card-hover);
  }

  .figma-tags span:hover {
    border-color: var(--fl-hairline-stronger);
    background: var(--fl-soft-hover);
    transform: translateY(-1px);
  }
}
</style>
