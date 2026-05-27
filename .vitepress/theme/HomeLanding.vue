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
          <p class="figma-label">经营视图</p>
          <h2>车辆在哪，钱到没到，风险谁在跟</h2>
          <p class="figma-copy">
            车辆、订单、收款、押金、违章和到期风险，一屏看清。
          </p>
          <div class="figma-actions" aria-label="首页落地页操作">
            <a class="figma-button figma-button--primary" href="/overview/what-features">看核心功能</a>
            <a class="figma-button figma-button--secondary" href="/overview/featured-functions">看特色能力</a>
            <a class="figma-button figma-button--secondary" href="/overview/version-introduction">看价格版本</a>
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
                  <span class="figma-label">经营驾驶舱</span>
                  <strong>今日经营概览</strong>
                </div>
                <em>风险盯办</em>
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

    <section class="figma-section figma-section--soft" aria-labelledby="digital-key-title">
      <div class="figma-wrap">
        <div class="figma-digital">
          <div class="figma-digital__main">
            <p class="figma-label">蓝牙数字钥匙</p>
            <h3 id="digital-key-title">不交钥匙，也能管住用车权限</h3>
            <p class="figma-copy">{{ digitalKey.copy }}</p>

            <div class="figma-tags" aria-label="蓝牙数字钥匙能力标签">
              <span v-for="tag in digitalKey.tags" :key="tag">{{ tag }}</span>
            </div>

            <div class="figma-digital__body">
              <div class="figma-feature-list" aria-label="蓝牙数字钥匙运营价值">
                <div v-for="item in digitalKey.values" :key="item.title" class="figma-feature-list__item">
                  <span>{{ item.label }}</span>
                  <strong>{{ item.title }}</strong>
                  <p>{{ item.text }}</p>
                </div>
              </div>

              <aside class="figma-price-strip" aria-label="蓝牙数字钥匙首购套餐价格">
                <div v-for="plan in digitalKey.plans" :key="plan.name" class="figma-price-strip__row">
                  <span>{{ plan.name }}</span>
                  <strong>{{ plan.price }}</strong>
                  <p>{{ plan.text }}</p>
                </div>
                <span class="figma-label">费用说明</span>
                <p>{{ digitalKey.note }}</p>
              </aside>
            </div>

            <div class="figma-actions">
              <a class="figma-button figma-button--primary" href="/overview/ble-digital-key">了解详情</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="figma-section figma-section--soft">
      <div class="figma-wrap">
        <div class="figma-section__head">
          <div>
            <p class="figma-label">经营收益</p>
            <h3>少靠人盯，也能把车和钱管住</h3>
          </div>
          <p class="figma-copy">
            该收的钱、该处理的风险、该交付的车，都有状态和负责人。
          </p>
        </div>
        <div class="figma-outcome-list" aria-label="经营收益要点">
          <article v-for="item in outcomes.items" :key="item.title" class="figma-outcome-list__item">
            <span>{{ item.index }}</span>
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
          </article>
        </div>

        <div class="figma-proof-list" aria-label="经营闭环补充内容">
          <article v-for="item in outcomes.details" :key="item.title">
            <span>{{ item.label }}</span>
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
            <p class="figma-label">业务闭环</p>
            <h3 id="workflow-title">从接单到退车，不靠群里催</h3>
          </div>
          <p class="figma-copy">销售、财务、车管围绕订单推进，管理者不用反复追问。</p>
        </div>

        <ol class="figma-timeline" aria-label="业务闭环流程">
          <li v-for="(step, index) in workflow.steps" :key="step.title">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <strong>{{ step.title }}</strong>
            <p>{{ step.text }}</p>
          </li>
        </ol>

        <div class="figma-proof-list figma-proof-list--3" aria-label="流程补充信息">
          <article v-for="item in workflow.meta" :key="item.title">
            <span>{{ item.label }}</span>
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
            <p class="figma-label">可落地能力</p>
            <h3 id="capability-title">经营关心的事，系统接住</h3>
          </div>
          <p class="figma-copy">车辆、订单、资金、违章、合同和图片证据统一管理。</p>
        </div>
        <div class="figma-capability-list" aria-label="可落地能力清单">
          <article v-for="item in capabilityMatrix.items" :key="item.title">
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
            <p class="figma-label">岗位协同</p>
            <h3 id="roles-title">管理层看结果，员工按流程做</h3>
          </div>
          <p class="figma-copy">管理层看结果，销售、财务、车管按待办推进。</p>
        </div>

        <div class="figma-status-strip" aria-label="角色工作台摘要">
          <article v-for="item in roles.board" :key="item.title">
            <span>{{ item.label }}</span>
            <strong>{{ item.title }}</strong>
          </article>
        </div>

        <div class="figma-role-table" aria-label="岗位收益">
          <article v-for="role in roles.items" :key="role.name">
            <span>{{ role.metric }}</span>
            <strong>{{ role.name }}</strong>
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
            <h3 id="plans-title">按车队规模算账</h3>
          </div>
          <p class="figma-copy">按车辆规模选版本，功能全部开放，不按模块拆售。</p>
        </div>

        <div class="figma-plan-table" aria-label="版本价格对比">
          <article v-for="plan in plans.items" :key="plan.name">
            <span>{{ plan.fit }}</span>
            <strong>{{ plan.name }}</strong>
            <em>{{ plan.price }}</em>
            <p>{{ plan.text }}</p>
          </article>
        </div>

        <div class="figma-action-strip" aria-label="下一步操作">
          <div class="figma-action-strip__copy">
            <p class="figma-copy">{{ plans.next.copy }}</p>
          </div>
          <div class="figma-action-strip__contact">
            <img src="/images/wechat-contact.png" alt="智行租赁微信联系方式二维码" />
            <div>
              <span>{{ plans.next.contact.label }}</span>
              <p>{{ plans.next.contact.text }}</p>
            </div>
          </div>
          <div class="figma-action-strip__actions">
            <a class="figma-button figma-button--primary" :href="plans.next.evaluate.link">{{ plans.next.evaluate.action }}</a>
            <a class="figma-button figma-button--magenta" :href="plans.next.demo.link" target="_blank" rel="noreferrer">{{ plans.next.demo.action }}</a>
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
  eyebrow: '给租车公司的经营系统',
  title: '智行租赁',
  tagline: '管车辆、管订单、管收款、管风险。少靠人盯，随时看清经营状态。',
  actions: [
    { theme: 'primary', text: '看核心功能', link: '/overview/what-features' },
    { theme: 'secondary', text: '看特色能力', link: '/overview/featured-functions' },
    { theme: 'secondary', text: '看价格版本', link: '/overview/version-introduction' }
  ]
}

const toggleTheme = () => {
  isDark.value = !isDark.value
}

const dashboard = {
  tags: ['车辆利用', '订单进度', '收款押金', '到期风险', '企业微信通知', '蓝牙数字钥匙', '租客端小程序', '专属系统'],
  nav: ['首页', '订单', '车辆', '财务', '风控'],
  metrics: [
    { label: '在租车辆', title: '128 台', text: '利用率' },
    { label: '待收款', title: '36 单', text: '今日跟进' },
    { label: '风险提醒', title: '09 项', text: '需处理' }
  ],
  orders: [
    { name: '川A782', stage: '待交车', status: '验车' },
    { name: '川A921', stage: '用车中', status: '定位' },
    { name: '川A816', stage: '待退车', status: '结算' },
    { name: '川A530', stage: '待续租', status: '跟进' }
  ],
  tasks: [
    { label: '经营关注', title: '今日风险', text: '越界 / 年检 / 违章' },
    { label: '资金摘要', title: '回款进度', text: '租金 / 押金 / 退款' },
    { label: '员工待办', title: '责任到人', text: '推送给负责人' }
  ],
  activity: [
    '逾期订单已提醒销售',
    '越界车辆已通知车管',
    '押金退款待财务复核'
  ]
}

const outcomes = {
  items: [
    { index: '01', title: '少漏单', text: '每个节点都有状态。' },
    { index: '02', title: '钱账清楚', text: '租金、押金、退款可对账。' },
    { index: '03', title: '风险提前', text: '到期、欠租、违章早提醒。' },
    { index: '04', title: '责任可追', text: '异常能追到车和人。' }
  ],
  details: [
    { label: '经营视图', title: '一屏看经营', text: '车辆、订单、资金、风险集中看。' },
    { label: '责任定位', title: '异常有人跟', text: '逾期、欠租、违章能定位责任人。' },
    { label: '过程留痕', title: '纠纷有依据', text: '验车、处理、结算都有记录。' }
  ]
}

const workflow = {
  steps: [
    { title: '建档', text: '车辆、客户、司机统一归档。' },
    { title: '签约收款', text: '合同、押金、租金进订单。' },
    { title: '验车交付', text: '图片、车况、交付留痕。' },
    { title: '用车风控', text: '定位、违章、年检持续跟。' },
    { title: '续租 / 换车', text: '变更回到原订单。' },
    { title: '退车结算', text: '验车、结算、退款归档。' }
  ],
  meta: [
    { label: '参与角色', title: '销售 / 财务 / 车管', text: '节点清楚，不用逐个追问。' },
    { label: '业务产出', title: '订单、验车、收款留痕', text: '合同、图片、费用都回订单。' },
    { label: '系统价值', title: '少靠人工催办', text: '异常更早暴露。' }
  ]
}

const capabilityMatrix = {
  items: [
    { title: '车辆资产看得清', text: '档案、保险、年检、维修统一管。', tags: ['资产台账', '年检保险', '维修保养'] },
    { title: '订单进度不脱节', text: '签约、出车、续租、退车围绕订单走。', tags: ['订单流转', '换车续租', '退车结算'] },
    { title: '合同证件少录入', text: '证件识别，合同和单据自动生成。', tags: ['证件识别', '合同模板', '单据生成'] },
    { title: '违章年检自动盯', text: '违章、年检同步到车和订单。', tags: ['交管同步', '自动同步', '司机匹配'] },
    { title: '收款押金可核', text: '租金、押金、退款统一对账。', tags: ['收付款', '押金', '结算'] },
    { title: '风险消息到群', text: '到期、欠租、违章自动提醒。', tags: ['风险一览', '企业微信', '提前提醒'] },
    { title: '权限留痕防扯皮', text: '按角色授权，关键操作有记录。', tags: ['角色权限', '按钮控制', '操作留痕'] },
    { title: '图片证据防纠纷', text: '验车、维修、出险图片可回溯。', tags: ['图片留痕', '证据链', '自动清理'] }
  ]
}

const digitalKey = {
  copy: '租客小程序开关车。权限跟订单走，越界通知到群。免破线取电，手机没网也能开车。',
  tags: ['168 元/台起', '微信小程序', '蓝牙开关车', '订单自动授权', '免破线取电', '城市电子围栏', '没网也能用车'],
  values: [
    { label: '钥匙交接', title: '少交实体钥匙', text: '少错交、少漏还、少丢钥匙。' },
    { label: '权限控制', title: '退车自动收权', text: '订单结束，租客钥匙自动失效。' },
    { label: '车辆风控', title: '越界通知到群', text: '定位和城市围栏联动提醒。' },
    { label: '无人值守', title: '支持自助取还车', text: '解锁、上锁、寻车、后备箱。' }
  ],
  plans: [
    { name: '1 年套餐', fit: '每台设备', price: '168 元/台', text: '含硬件、1 年平台和流量。' },
    { name: '3 年套餐', fit: '每台设备', price: '218 元/台', text: '含硬件、3 年平台和流量。' }
  ],
  note: '价格不含税、不含运费、不含焊接钥匙费用。'
}

const roles = {
  board: [
    { label: '今日收款', title: '租金 / 押金 / 退款' },
    { label: '车辆风险', title: '年检 / 保险 / 违章 / 越界' },
    { label: '交付进度', title: '待签约 / 待出车 / 待退车' },
    { label: '消息触达', title: '企业微信推送责任人' }
  ],
  items: [
    { name: '管理层', metric: '经营视图', value: '看车、看钱、看风险。' },
    { name: '门店运营', metric: '交付任务', value: '按订单推进交付。' },
    { name: '销售人员', metric: '客户跟进', value: '跟签约、交付、续租。' },
    { name: '财务人员', metric: '资金状态', value: '管租金、押金、退款。' },
    { name: '车管人员', metric: '车辆风险', value: '管年检、保险、维修、违章。' },
    { name: '外部协作方', metric: '授权协同', value: '按授权查看协作事项。' }
  ]
}

const plans = {
  items: [
    { name: '轻量版', fit: '50 台以内', price: '¥1,300 / 年', text: '小车队先管起来。' },
    { name: '标准版', fit: '400 台以内', price: '¥5,200 / 年', text: '适合门店协作。' },
    { name: '旗舰版', fit: '400 台以上', price: '¥10 / 台车 / 年', text: '适合更大车队。' }
  ],
  next: {
    copy: '先看功能，再看版本。想快速判断，直接进演示或扫码咨询。',
    contact: {
      label: '微信咨询',
      text: '扫码领演示账号，咨询版本和设备方案。'
    },
    evaluate: {
      label: '经营评估',
      text: '先确认车辆、订单、财务、风控、数字钥匙和租客端能力是否覆盖当前业务。',
      action: '看功能',
      link: '/overview/what-features'
    },
    demo: {
      label: '体验产品',
      text: '直接进入演示站点，按签约、出车、退车结算体验真实业务流。',
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

  &--digital-values {
    grid-template-columns: repeat(4, minmax(0, 1fr));
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
}

.figma-digital {
  display: grid;

  &__main {
    display: grid;
    gap: 18px;
  }

  &__body {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(300px, 0.48fr);
    gap: 40px;
    align-items: start;
  }

  .figma-actions,
  .figma-tags {
    margin-top: 0;
  }
}

.figma-feature-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 28px;
  border-top: 1px solid var(--fl-hairline);

  &__item {
    min-width: 0;
    padding: 18px 0;
    border-bottom: 1px solid var(--fl-hairline);

    span {
      @include label;
      color: var(--fl-muted);
    }

    strong {
      display: block;
      margin-top: 8px;
      font-size: 20px;
      font-weight: 700;
      line-height: 1.35;
    }

    p {
      @include copy(16px);
    }
  }
}

.figma-price-strip {
  display: grid;
  gap: 0;
  align-self: start;
  border-top: 1px solid var(--fl-hairline);
  border-bottom: 1px solid var(--fl-hairline);
  padding: 4px 0;

  &__row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px 18px;
    padding: 18px 0;
    border-bottom: 1px solid var(--fl-hairline);

    + .figma-price-strip__row {
      padding-top: 18px;
    }

    span {
      @include label;
      color: var(--fl-muted);
    }

    strong {
      font-size: 34px;
      font-weight: 700;
      line-height: 1;
      white-space: nowrap;
    }

    p {
      @include copy(15px);
      grid-column: 1 / -1;
      margin-top: 0;
    }
  }

  > .figma-label {
    margin-top: 18px;
  }

  > p {
    @include copy(15px);
    max-width: 320px;
  }
}

.figma-outcome-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid var(--fl-hairline);
  border-bottom: 1px solid var(--fl-hairline);

  &__item {
    min-width: 0;
    padding: 18px 18px 20px;

    + .figma-outcome-list__item {
      border-left: 1px solid var(--fl-hairline);
    }

    span {
      @include label;
      color: var(--fl-muted);
    }

    h4 {
      margin-top: 18px;
      font-size: 22px;
      font-weight: 700;
      line-height: 1.3;
    }

    p {
      @include copy(16px);
    }
  }
}

.figma-proof-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid var(--fl-hairline);

  article {
    min-width: 0;
  }

  span {
    @include label;
    color: var(--fl-muted);
  }

  strong {
    display: block;
    margin-top: 8px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.35;
  }

  p {
    @include copy(16px);
  }
}

.figma-timeline {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0;
  margin: 0;
  padding: 18px 0 0;
  border-top: 1px solid var(--fl-hairline);
  list-style: none;

  li {
    position: relative;
    min-width: 0;
    padding: 18px 18px 0 0;

    &::before {
      position: absolute;
      top: -22px;
      left: 0;
      width: 9px;
      height: 9px;
      border: 1px solid currentColor;
      border-radius: 9999px;
      background: var(--fl-panel-bg);
      content: "";
    }
  }

  span {
    @include label;
    color: var(--fl-muted);
  }

  strong {
    display: block;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.35;
  }

  p {
    @include copy(15px);
  }
}

.figma-capability-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 32px;
  border-top: 1px solid var(--fl-hairline);

  article {
    min-width: 0;
    padding: 12px 0 14px;
    border-bottom: 1px solid var(--fl-hairline);
  }

  h4 {
    margin: 0;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.35;
  }

  p {
    @include copy(15px);
  }

  .figma-tags {
    margin-top: 8px;
  }
}

.figma-status-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid var(--fl-hairline);
  border-bottom: 1px solid var(--fl-hairline);

  article {
    min-width: 0;
    padding: 16px 18px;

    + article {
      border-left: 1px solid var(--fl-hairline);
    }
  }

  span {
    @include label;
    color: var(--fl-muted);
  }

  strong {
    display: block;
    margin-top: 8px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.35;
  }
}

.figma-role-table {
  display: grid;
  margin-top: 24px;
  border-top: 1px solid var(--fl-hairline);

  article {
    display: grid;
    grid-template-columns: minmax(92px, 0.42fr) minmax(110px, 0.5fr) minmax(0, 1.8fr);
    gap: 16px;
    align-items: baseline;
    padding: 14px 0;
    border-bottom: 1px solid var(--fl-hairline);
  }

  span {
    @include label;
    color: var(--fl-muted);
  }

  strong {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.35;
  }

  p {
    margin: 0;
    color: currentColor;
    font-size: 16px;
    font-weight: 320;
    line-height: 1.45;
    opacity: 0.72;
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

.figma-plan-table {
  display: grid;
  border-top: 1px solid var(--fl-hairline);
  border-bottom: 1px solid var(--fl-hairline);

  article {
    display: grid;
    grid-template-columns: minmax(96px, 0.45fr) minmax(100px, 0.55fr) minmax(150px, 0.6fr) minmax(0, 1.45fr);
    gap: 18px;
    align-items: baseline;
    padding: 18px 0;

    + article {
      border-top: 1px solid var(--fl-hairline);
    }
  }

  span {
    @include label;
    color: var(--fl-muted);
  }

  strong {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.35;
  }

  em {
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;
  }

  p {
    margin: 0;
    color: currentColor;
    font-size: 16px;
    font-weight: 320;
    line-height: 1.45;
    opacity: 0.72;
  }
}

.figma-action-strip {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(220px, 0.7fr) auto;
  gap: 24px;
  align-items: center;
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid var(--fl-hairline);

  &__copy .figma-copy {
    margin-top: 0;
  }

  &__contact {
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr);
    gap: 14px;
    align-items: center;

    img {
      width: 72px;
      height: 72px;
      border: 1px solid var(--fl-hairline);
      border-radius: 8px;
      background: #ffffff;
      object-fit: contain;
    }

    span {
      @include label;
      color: var(--fl-muted);
    }

    p {
      @include copy(15px);
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 10px;
  }

  .figma-button {
    white-space: nowrap;
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

}

@media (min-width: $bp-mobile) and (max-width: 1100px) {
  .figma-section {
    > .figma-wrap {
      padding: 32px;
    }

    h2,
    h3 {
      font-size: 34px;
      line-height: 1.08;
    }
  }

  .figma-section .figma-split {
    grid-template-columns: minmax(240px, 0.56fr) minmax(0, 1fr);
    gap: 24px;
  }

  .figma-intro {
    gap: 12px;
  }

  .figma-copy {
    font-size: 16px;
  }

  .figma-button {
    min-height: 38px;
    padding: 7px 14px;
    font-size: 16px;
  }

  .figma-tags {
    gap: 6px;
  }

  .figma-tags span {
    padding: 6px 10px;
    font-size: 13px;
  }

  .figma-product {
    width: 100%;
    min-width: 0;

    &__body {
      grid-template-columns: 78px minmax(0, 1fr);
      min-height: 420px;
    }

    &__nav {
      padding: 12px 8px;
    }

    &__workspace {
      grid-template-columns: minmax(0, 1fr) 112px;
    }

    &__table-head,
    &__row {
      grid-template-columns: minmax(0, 1fr) 44px 44px;
      gap: 6px;
    }

    &__tasks {
      padding: 10px;
    }
  }

  .figma-plan-table em {
    font-size: 24px;
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

  .figma-digital,
  .figma-digital__body,
  .figma-feature-list,
  .figma-outcome-list,
  .figma-proof-list,
  .figma-capability-list,
  .figma-status-strip {
    grid-template-columns: 1fr;
  }

  .figma-price-strip__row {
    grid-template-columns: 1fr;

    strong {
      margin-top: 4px;
    }
  }

  .figma-price-strip > .figma-label {
    margin-top: 18px;
  }

  .figma-outcome-list__item + .figma-outcome-list__item {
    border-left: 0;
    border-top: 1px solid var(--fl-hairline);
  }

  .figma-status-strip article + article {
    border-left: 0;
    border-top: 1px solid var(--fl-hairline);
  }

  .figma-timeline {
    grid-template-columns: 1fr;
    gap: 0;
    border-top: 0;
    border-left: 1px solid var(--fl-hairline);
    padding: 0 0 0 18px;

    li {
      padding: 0 0 22px 18px;

      &::before {
        top: 5px;
        left: -23px;
      }
    }
  }

  .figma-role-table article {
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .figma-plan-table article,
  .figma-action-strip {
    grid-template-columns: 1fr;
  }

  .figma-action-strip__actions {
    justify-content: stretch;

    .figma-button {
      flex: 1 1 140px;
    }
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
